/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'], function (config, $) {
    var User = function () {
        var _arr = [
            {
                "nickname": "赵荣",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdjGKVSqbGQLWF0wGxxS9TggTod5c6ichWE4sicF0Gaia6rQ/"
            },
            {
                "nickname": "张楠",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6fgh9unjj2zgAq4u3kkibuUw/"
            },
            {
                "nickname": "陆章其",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6mibjJ61wJZ5jFyLKe3aKSNw/"
            },
            {
                "nickname": "尹振宇",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY31AEicuic8WP8tFzD0Z045MAAQ/"
            },
            {
                "nickname": "王海滨",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYfZ6lO9OiaJziczsO8ibl9aJTxl2MXDAHUeOmO124rib4zlbg/"
            },
            {
                "nickname": "钟成",
                "avatar": ""
            },
            {
                "nickname": "李知远",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYclIpDbMrVTgD06G9yGffYtrgNAtCMWp6sDLekyFxNX9w/"
            },
            {
                "nickname": "顾黎明",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6j5kSbcML1Riay5cKx7lmNGA/"
            },
            {
                "nickname": "王东",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6mq6Sd51dLDoLE661xnndbA/"
            },
            {
                "nickname": "黄俊鑫",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6kMfxnMRN9rhr9oicUoJEOUQ/"
            },
            {
                "nickname": "张航",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY31JIic3fkq3xL1rcQKkTnZsqw/"
            },
            {
                "nickname": "宋振豪",
                "avatar": ""
            },
            {
                "nickname": "李豪杰",
                "avatar":"http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY31VuibCpW2BBX2QiclPahKojsg/"
            },
            {
                "nickname": "李鑫凌",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYcCflgLqDiaTwJX9prg7CDvjJEUqXtenFDfsCYxkAkOPhQ/"
            },
            {
                "nickname": "黄明",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYfZ6lO9OiaJziczsO8ibl9aJTxKlibqheh1wPUK5WDtHuibXZg/"
            },
            {
                "nickname": "范旭东",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYcCflgLqDiaTwJX9prg7CDvjiaicU0qJ4wOkS4CORZed0DoQ/"
            },
            {
                "nickname": "徐海东",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY31MV3IgYHqicONFoRGaqoDicbg/"
            },
            {
                "nickname": "陈崎峰",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6nUH6LdIV9K0Mlh9cQEBQLw/"
            },
            {
                "nickname": "彭煕",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYfZ6lO9OiaJziczsO8ibl9aJTxpw7OzBibNP0r6hticibYMSY4w/"
            },
            {
                "nickname": "刘冰",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY315ORiaxficP0bdV7zUh6AEtSg/"
            },
            {
                "nickname": "齐闻",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYclIpDbMrVTgD06G9yGffYtia9X8GnSeTojtrXEG0LxW1Q/"
            },
            {
                "nickname": "吴品彦",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6XcNzicCHrrtru6XicwYKQTSA/"
            },
            {
                "nickname": "刘霖",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6nia2S1RicmbV3uVaeJPYstaA/"
            },
            {
                "nickname": "戢汉邦",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY31xFqhaZlyw7dhDbgwibLWQnQ/"
            },
            {
                "nickname": "王艺萌",
                "avatar":"http://shp.qpic.cn/bizmp/EIxjZcrBHYfZ6lO9OiaJziczsO8ibl9aJTxKjlzZlpzsBDrCYZx7yPQsQ/"
            },
            {
                "nickname": "宋泽明",
                "avatar":"http://shp.qpic.cn/bizmp/EIxjZcrBHYclIpDbMrVTgD06G9yGffYtVibjmYk9vABF1gu1ichRHLpA/"
            },
            {
                "nickname": "孙健",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY31EC1kDrSicTAV8ycNLYianVBQ/"
            },
            {
                "nickname": "张培培",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYdUib6tcics38F5gbiaLCgqY31rSKGCr3yc3Jzx7ZjoVN62g/"
            },
            {
                "nickname": "曹晓明",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYfZ6lO9OiaJziczsO8ibl9aJTxvI12BrMYo3lYDpaT3iaKufQ/"
            },
            {
                "nickname": "刘皋",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6NZ5oJAVy2WaKibnOgYGkTow/"
            },
            {
                "nickname": "季云培",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6fyeheaficteHXQYfYagJJGA/"
            },
            {
                "nickname": "童梅",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYf43yjhA9UiboQSvq9YvrSic6FvsicvdRcslTm6MJuxdmpiaA/"
            },
            {
                "nickname": "施家奇",
                "avatar": ""
            },
            {
                "nickname": "王晓迪",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYclIpDbMrVTgD06G9yGffYtbAY5GzGZgyHWr0MNuKguhQ/"
            },
            {
                "nickname": "皇甫绍钧",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYclIpDbMrVTgD06G9yGffYtBcssicCuHfINKb3ezJ3sYYA/"
            },
            {
                "nickname": "李坤",
                "avatar": "http://shp.qpic.cn/bizmp/EIxjZcrBHYcCflgLqDiaTwJX9prg7CDvjehxUEcw7ic0AuajjLGzMhvw/"
            }
        ];

        $.each(_arr, function (i, e) {
            e.id = i;
        });

        function _getFromStorage(key) {
            return JSON.parse(window.localStorage.getItem(key) || '[]');
        }

        function _setByStorage(key, val) {
            window.localStorage.setItem(key, JSON.stringify(val));
        }

        function _removeByStorage(key, val) {
            window.localStorage.setItem(key, JSON.stringify(val));
        }

        return{
            clearLuckyGuy: function () {
                _setByStorage('award', []);
            },
            addLuckyGuy: function (guy) {
                var guys = _getFromStorage('award') || [];
                guys.push(guy);
                _setByStorage('award', guys);
            },
            getLuckGuy: function (id) {
                var guys = _getFromStorage('award') || [];
                var guy = null;
                $.each(guys, function (i, e) {
                    if (e.id == id) {
                        guy = e;
                        return;
                    }
                });
                return guy;
            },
            getLuckGuys: function () {
                return _getFromStorage('award');
            },
            removeLuckGuy: function (id) {
                var guys = _getFromStorage('award') || [];
                $.each(guys, function (i, e) {
                    if (e && e.id == id) {
                        guys.splice(i, 1);
                        return;
                    }
                });
                _setByStorage('award', guys);
            },
            all: function () {
                return _arr;
            },
            add: function (guy) {
                if (!this.maxId) {
                    this.maxId = _arr.length;
                }
                guy.id = this.maxId++;
                _arr.push(guy);
            },
            get: function (index) {
                return _arr[index];
            },
            remove: function (index) {
                _arr.splice(index, 1);
            },
            total: function () {
                return _arr.length;
            }
        }
    };

    return User;
});
