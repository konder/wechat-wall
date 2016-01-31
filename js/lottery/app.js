/**
 * Created by zhangnan on 15/1/11.
 */
define(['models/user', 'models/bingo', 'models/message', 'lottery/views/appView', 'wall/views/appView', '../utils', 'config', 'jquery'
], function (User, Bingo, Message, AppView, WallView, utils, config, $) {
    var $el = $('.container');
    var $bingoAvatar = $el.find('.bingo .guy img');
    var $bingoNickName = $el.find('.bingo .guy .nickname');
    var $awards = $el.find('.result ul');
    var $users = $el.find('.users ul');
    var $blacklist = $el.find('.blacklist ul');
    var $hudong = $el.find('.header .hudong');


    var updateUser = true;
    var user = new User();
    // TODO
    $.each(user.getLuckGuys(), function (i, e) {
        $.each(user.all(), function (ai, ae) {
            if (ae && e.openid == ae.openid) {
                //user.addBlack(ai.id);
                user.remove(ai.id);
                return;
            }
        });
    });
    var wallView = new WallView($hudong);
    var message = new Message();
    utils.thread.run({
        callback: function () {
            message.fetch(wallView.drawOne);
            if (updateUser) {
                user.update();
                loadAwards();
            }
        },
        interval: config.wall.interval
    });

    var bingo = new Bingo(user, $el);
    bingo.draw(function (name, url) {
        $bingoAvatar.attr('src', url);
        $bingoNickName.html(name);
    });

    function loadAwards() {
        $users.html('');
        $blacklist.html('');
        $awards.html('');

        $.each(user.getLuckGuys(), function (i, e) {
            $.each(user.all(), function (ai, ae) {
                if (ae && e.openid == ae.openid) {
                    user.remove(ai);
                    return;
                }
            });
        });

        $.each(user.getLuckGuys(), function (index, element) {
            $awards.append($('<li>').append('<div class="row"><div class="name col-md-10">' + element.nickname + '</div><div class="col-md-2"><a href="#" data-id="' + element.id + '"> <i class="fa fa-remove"> </div></i></a>'));
        });
        $('.result li a').click(function () {
            bingo.remove(parseInt($(this).data('id')));
            $(this).parent().remove();
            loadAwards();
        });

        $.each(user.all(), function (index, element) {
            $users.append($('<li>').append('<a href="#" data-id="' + index + '"><img src="' + element.avatar + '" height="80px"/></a>'));
        });
        $('.users li a').click(function () {
            user.remove(parseInt($(this).data('id')));
            $(this).parent().remove();
            loadAwards();
        });

        $.each(user.getBlack(), function (index, element) {
            $blacklist.append($('<li>').append('<a href="#" data-id="' + index + '"><img src="' + element.avatar + '" height="80px"/></a>'));
        });
        $('.blacklist li a').click(function () {
            user.remove(parseInt($(this).data('id')));
            $(this).parent().remove();
            loadAwards();
        });
    };

    var $startBtn = $('.bingo button.start');
    var $endBtn = $('.bingo button.end');
    $endBtn.hide();

    $startBtn.click(function () {
        updateUser = false;
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
        //var nickname = prompt('输入姓名');
        //if (nickname) {
        //    var guy = {nickname: nickname, avatar: 'avatar/default.png'};
        //    $.each(user.all(), function (i, e) {
        //        if (e.nickname == nickname) {
        //            guy.avatar = e.avatar;
        //            return;
        //        }
        //    });
        //    user.add(guy);
        //}
        //loadAwards();
        if (!updateUser) {
            user.update();
            loadAwards();
        } else {
            updateUser = false;
            alert("停止自动更新.");
        }
    });

    loadAwards();
});