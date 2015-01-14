/**
 * Created by zhangnan on 15/1/11.
 */
define(['models/datasource', 'models/bingo', 'lottery/views/appView', '../utils', 'config', 'jquery'
], function (DataSource, Bingo, AppView, utils, config, $) {
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
            $users.append($('<li>').append('<img src="' + element.avatar + '" height="15px"/><span class="name">' + element.nickname + '</span><a href="#" data-id="' + index + '"> <i class="fa fa-remove"> </i></a>'));
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