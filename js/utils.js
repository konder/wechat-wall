/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'
], function () {
    Function.prototype.curry = function () {
        var slice = Array.prototype.slice,
            args = slice.apply(arguments),
            that = this;
        return function () {
            return that.apply(null, args.concat(slice.apply(arguments)));
        };
    };

    var CountDown = function () {
        var _getCountDownTimer = function () {
            return this.countDownTimer;
        };
        var _setCountDownTimer = function (_countDownTimer) {
            this.countDownTimer = _countDownTimer;
        };

        var _getTime = function () {
            return this.countDownTime;
        };
        var _setTime = function (_countDownTime) {
            this.countDownTime = _countDownTime;
        }

        var run = function (conf) {
            var countDownTime = _getTime() || conf.period;
            typeof conf.every == 'function' && conf.every(countDownTime);
            _setTime(--countDownTime);

            if (countDownTime <= 0) {
                clearTimeout(_getCountDownTimer());
                typeof conf.finished == 'function' && conf.finished();
            } else {
                _setCountDownTimer(setTimeout(run.curry(conf), conf.interval || 1000));
            }
        };
        return {
            run: run
        }
    };

    var Thread = function () {
        var _getThreadTimer = function () {
            return this.threadTimer;
        };
        var setThreadTimer = function (_threadTimer) {
            this.threadTimer = _threadTimer;
        };

        var run = function (conf) {
            typeof conf.callback == 'function' && conf.callback();
            setThreadTimer(setTimeout(run.curry(conf), conf.interval || 1000));
        };
        var stop = function () {
            clearTimeout(_getThreadTimer());
        };

        return {
            run: run,
            stop: stop
        }
    }
    return {
        countDown: new CountDown(),
        thread: new Thread()
    };
});