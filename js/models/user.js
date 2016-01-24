/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'], function (config, $) {
    var User = function () {
        var _arr = [];
        var _black = [];
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

        return {
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
                var guys = _getFromStorage('award') || [];
                if (!_black) {
                    _black.push(guys);
                }
                return guys;
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
            update: function () {
                $.ajax({
                    type: 'GET',
                    url: config.backend + 'user',
                    dataType: "jsonp",
                    success: function (data) {
                        $.each(data, function (i, e) {
                            e.id = i;
                        });
                        _arr = data;
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });
            },
            get: function (index) {
                return _arr[index];
            },
            remove: function (index) {
                _arr.splice(index, 1);
            },
            total: function () {
                return _arr.length;
            }, getBlack: function () {
                console.log(_black);
                return _black;
            }, addBlack: function (index) {
                var guy = _arr[index];
                _black.push(guy);
            }

        }
    };

    return User;
});
