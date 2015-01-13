/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'], function (config, $) {
    var Bingo = function (dataSource) {
        var timer;
        var drawer;

        return {
            draw: function (_drawer) {
                drawer = _drawer;
            },
            start: function () {
                dataSource.total() < 2 || timer || this.avatar();
            },
            end: function () {
                return dataSource.total() < 2 || this.randit();
            },
            avatar: function () {
                var result = Math.round(Math.random() * dataSource.total() + .5) - 1;
                var guy = dataSource.get(result);
                drawer(guy.nickname, guy.avatar);

                timer = setTimeout(arguments.callee, 100);
            },
            randit: function () {
                clearTimeout(timer);
                timer = null;

                var lucyNumber = Math.round(Math.random() * dataSource.total() + .5) - 1;
                var luckyGuy = dataSource.get(lucyNumber);
                drawer(luckyGuy.nickname, luckyGuy.avatar);

                dataSource.addLuckyGuy(luckyGuy);
                dataSource.remove(lucyNumber);
            },
            remove: function (id) {
                var guy = dataSource.getLuckGuy(id);
                dataSource.removeLuckGuy(id);
                dataSource.add(guy);
            },
            reset: function () {
                $.each(dataSource.getLuckGuys(), function (i, e) {
                    dataSource.add(e);
                });
                dataSource.clearLuckyGuy();
            }
        };
    };

    return Bingo;
});
