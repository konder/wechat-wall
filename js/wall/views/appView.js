/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'
], function (config, $) {
    String.prototype.startWith = function (s) {
        return this.indexOf(s) == 0
    }
    String.prototype.endWith = function (s) {
        var d = this.length - s.length;
        return (d >= 0 && this.lastIndexOf(s) == d)
    }

    var AppView = function ($el) {
        return {
            drawOne: function (data) {
                $.each(data.slice(0, 1), function (i, e) {
                    var userid = e.userid.replace('@', '_');
                    var avatar = e.author.avatar || 'avatar/default.png';
                    var name = e.author.name || e.userid;
                    var content = e.content || '';

                    if (content.startWith('[匿名]')){
                        avatar = 'avatar/default.png';
                        name = '匿名';
                    }

                    $el.html(
                            '<div class="message user_' + userid + '">' +
                            '<div class="row">' +
                            '<div class="guy col-md-2"><img width="75px" src="' + avatar + '"/></div>' +
                            '<div class="col-md-10"><span class="name">' + name + '</span><p>' + content + '</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                    )
                    ;
                });
            },
            draw: function (data) {
                $.each(data.slice(0, 5), function (i, e) {
                    var userid = e.userid.replace('@', '_');
                    var avatar = e.author.avatar || 'avatar/default.png';
                    var name = e.author.name || e.userid;
                    var content = e.content || '';
                    var image = e.image || '';

                    if (content.startWith('[匿名]')){
                        avatar = 'avatar/default.png';
                        name = '匿名';
                    }

                    $el.prepend(
                            '<li class="user_' + userid + '">' +
                            '<div class="row">' +
                            '<div class="guy col-md-2"><img width="75px" src="' + avatar + '"/></div>' +
                            '<div class="col-md-10"><span class="name">' + name + '</span><p>' + content + '</p>' +
                                (image ? '<img height="450px" src="' + image +'"/>' : '') +
                            '</div>' +
                            '</div>' +
                            '</li>'
                    );

                });
                $.each($el.find('li'), function (i, e) {
                    i >= config.wall.count && e.remove();
                });
            }
        }
    };
    return AppView;
});