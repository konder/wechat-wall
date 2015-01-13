/**
 * Created by zhangnan on 15/1/10.
 */
var DataSource = function () {
    var _arr = [
        {
            "nickname": "Run的微笑",
            "avatar": "avatar/u=185553609,1774252923&fm=56.jpg"
        },
        {
            "nickname": "物我皆忘",
            "avatar": "avatar/u=438033906,140804659&fm=56.jpg"
        },
        {
            "nickname": "我炫故我在1",
            "avatar": "avatar/u=2544812601,4112143362&fm=56.jpg"
        },
        {
            "nickname": "赵创锋",
            "avatar": "avatar/u=2806552473,155952672&fm=56.jpg"
        },
        {
            "nickname": "终结者24KB",
            "avatar": "avatar/u=2997250176,1088349971&fm=56.jpg"
        },
        {
            "nickname": "sorrow苏颜",
            "avatar": "avatar/u=650515163,789500416&fm=56.jpg"
        },
        {
            "nickname": "汉高祖VS刘邦",
            "avatar": "avatar/u=1408923916,1395444739&fm=56.jpg"
        },
        {
            "nickname": "忘日液",
            "avatar": "avatar/u=1617945198,3040447814&fm=56.jpg"
        },
        {
            "nickname": "轩雅恨恨的",
            "avatar": "avatar/u=1649363276,2071504921&fm=56.jpg"
        },
        {
            "nickname": "加速小宇宙",
            "avatar": "avatar/u=2141311539,3870874150&fm=56.jpg"
        },
        {
            "nickname": "轮回蜜峰",
            "avatar": "avatar/u=2238870722,3425230275&fm=56.jpg"
        },
        {
            "nickname": "龙血溅轩辕",
            "avatar": "avatar/u=2541424824,4071600483&fm=56.jpg"
        },
        {
            "nickname": "chou__爷",
            "avatar": "avatar/u=2587316231,1456895540&fm=56.jpg"
        },
        {
            "nickname": "衣霏青",
            "avatar": "avatar/u=2785619621,148693455&fm=56.jpg"
        },
        {
            "nickname": "澐思然",
            "avatar": "avatar/u=2853033191,179001619&fm=56.jpg"
        },
        {
            "nickname": "天台封",
            "avatar": "avatar/u=3122060977,2586459116&fm=56.jpg"
        },
        {
            "nickname": "路小北two",
            "avatar": "avatar/u=3270960935,1272720013&fm=56.jpg"
        },
        {
            "nickname": "计先森man",
            "avatar": "avatar/u=3498234511,387811045&fm=56.jpg"
        },
        {
            "nickname": "1蓓蓓ok",
            "avatar": "avatar/u=3549817753,1223314002&fm=56.jpg"
        },
        {
            "nickname": "梦回大宋0830",
            "avatar": "avatar/u=3713433905,3921035683&fm=56.jpg"
        },
        {
            "nickname": "烟0火gg",
            "avatar": "avatar/u=3741332824,1196880545&fm=56.jpg"
        },
        {
            "nickname": "小0戈多",
            "avatar": "avatar/u=3847922882,75243201&fm=56.jpg"
        },
        {
            "nickname": "主流8080",
            "avatar": "avatar/u=3983434954,510651960&fm=56.jpg"
        },
        {
            "nickname": "薄雾初浓",
            "avatar": "avatar/u=262962589,2710868004&fm=56.jpg"
        },
        {
            "nickname": "我的宇宙没人懂",
            "avatar": "avatar/u=881996670,1383036700&fm=56.jpg"
        },
        {
            "nickname": "把校花变残花",
            "avatar": "avatar/u=1042894098,4160783847&fm=56.jpg"
        },
        {
            "nickname": "我叫瓜瓜瓜",
            "avatar": "avatar/u=1066098853,1836594981&fm=56.jpg"
        },
        {
            "nickname": "浮甡若夢",
            "avatar": "avatar/u=1669014836,926866594&fm=56.jpg"
        },
        {
            "nickname": "最炫洗碗风",
            "avatar": "avatar/u=1905377513,523237053&fm=56.jpg"
        },
        {
            "nickname": "哥很狠低調",
            "avatar": "avatar/u=1981876363,2217330101&fm=56.jpg"
        },
        {
            "nickname": "windy醉枫",
            "avatar": "avatar/u=2489598822,430037729&fm=56.jpg"
        },
        {
            "nickname": "赵创锋",
            "avatar": "avatar/u=2806552473,155952672&fm=56.jpg"
        },
        {
            "nickname": "终结者24KB",
            "avatar": "avatar/u=2997250176,1088349971&fm=56.jpg"
        },
        {
            "nickname": "7420688",
            "avatar": "avatar/u=4106067502,515041042&fm=56.jpg"
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

$(document).ready(function () {
    var $el = $('.container');
    var $bingoAvatar = $el.find('.bingo .guy img');
    var $bingoNickName = $el.find('.bingo .guy .nickname');
    var $awards = $el.find('.result ul');
    var $users = $el.find('.users ul');

    var dataSource = new DataSource();
    // TODO
    $.each(dataSource.getLuckGuys(), function (i, e) {
        $.each(dataSource.all(), function (ai, ae) {
            if (ae && e.id == ae.id) {
                dataSource.remove(ai);
                return;
            }
        });
    });

    var bingo = new Bingo(dataSource, $el);
    bingo.draw(function (name, url) {
        $bingoAvatar.attr('src', url);
        $bingoNickName.html(name);
    });

    function loadAwards() {
        $users.html('');
        $awards.html('');

        $.each(dataSource.getLuckGuys(), function (index, element) {
            $awards.append($('<li>').append('<div class="row"><div class="name col-md-10">' + element.nickname + '</div><div class="col-md-2"><a href="#" data-id="' + element.id + '"> <i class="fa fa-remove"> </div></i></a>'));
        });
        $('.result li a').click(function () {
            bingo.remove(parseInt($(this).data('id')));
            $(this).parent().remove();
            loadAwards();
        });

        $.each(dataSource.all(), function (index, element) {
            $users.append($('<li>').append('<span class="name">' + element.nickname + '</span><a href="#" data-id="' + index + '"> <i class="fa fa-remove"> </i></a>'));
        });
        $('.users li a').click(function () {
            dataSource.remove(parseInt($(this).data('id')));
            $(this).parent().remove();
            loadAwards();
        });
    };

    var $startBtn = $('.bingo button.start');
    var $endBtn = $('.bingo button.end');
    $endBtn.hide();

    $startBtn.click(function () {
        bingo.start();
        $startBtn.toggle();
        $endBtn.toggle();
    });
    $endBtn.click(function () {
        bingo.end();
        loadAwards();
        $startBtn.toggle();
        $endBtn.toggle();
    });

    $('.result button.reset').click(function () {
        bingo.reset();
        loadAwards();
    });

    $('.users a.add').click(function () {
        var nickname = prompt('输入姓名');
        if (nickname) {
            var guy = {nickname: nickname, avatar: 'avatar/default.png'};
            $.each(dataSource.all(), function (i, e) {
                if (e.nickname == nickname) {
                    guy.avatar = e.avatar;
                    return;
                }
            });
            dataSource.add(guy);
        }
        loadAwards();
    });

    loadAwards();
});