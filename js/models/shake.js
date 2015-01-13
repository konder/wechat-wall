/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'], function (config, $) {
    var Shake = function () {
        return{
            score: function (_callBack) {
                $.ajax({
                    type: 'GET',
                    url: config.backend + 'shake/score',
                    dataType: "json",
                    success: function (data) {
                        _callBack(data);
                    }
                });
            },
            start: function () {
                $.get(config.backend + 'shake/start');
            },
            end: function (_callBack) {
                $.ajax({
                    type: 'GET',
                    url: config.backend + 'shake/end',
                    dataType: "json",
                    success: function (data) {
                        _callBack(data);
                    }
                });
            }
        }
    };

    return Shake;
});
