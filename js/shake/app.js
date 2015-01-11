/**
 * Created by zhangnan on 15/1/11.
 */
define(['models/shake', 'shake/views/scoreView', 'shake/views/userView', '../utils', 'config', 'jquery'
], function (Shake, ScoreView, UserView, utils, config, $) {
    var $el = $('.container');
    var $users = $el.find('.users ul');
    var $score = $el.find('.score ul');
    var $timer = $el.find('.timer');

    var shake = new Shake();
    var userView = new UserView($users);
    var scoreView = new ScoreView($score);


    utils.thread.run({
        callback: function(){
            shake.score(userView.draw);
        },
        interval: 2000
    });


    var $startBtn = $('.action button.start');
    $startBtn.click(function () {
        scoreView.clear();
        $startBtn.toggle();

        // 倒计时开始，时间到后再启动一个结束倒计时
        utils.countDown.run({
            finished: function () {
                // 正式开始，隐藏入口 -> 清空倒计时 -> 请求服务开始
                $timer.empty();
                shake.start();

                var scoreThread = utils.thread;
                scoreThread.run({
                    callback: function(){
                        shake.score(scoreView.draw);
                    },
                    interval: 1000
                });

                utils.countDown.run({
                    finished: function () {
                        // 结束, 清空倒计时 -> 请求服务结束 -> 显示入口
                        $timer.empty();

                        scoreThread.stop();

                        shake.end(scoreView.draw);
                        $startBtn.toggle();
                    },
                    every: function (countDownTime) {
                        $timer.html(countDownTime);
                    },
                    period: config.shake.period
                });
            },
            every: function (countDownTime) {
                $timer.html(countDownTime);
            },
            period: 10
        });
    });
});