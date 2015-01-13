/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'
], function (config, $) {
    var AppView = function ($el) {
        return {
            draw: function (data) {
                $.each(data, function (i, e) {
                    var userid = e.userid.replace('@', '_');
                    var avatar = e.author.avatar || 'avatar/default.png';
                    var name = e.author.name || e.userid;
                    $.each($el.find('li'), function(i, e){
                        //i > config.wall.count && e.remove();
                    });
                    $el.prepend(
                            '<li class="user_' + userid + '">' +
                            '<div><img width="75px" src="' + avatar + '"/><span>' + name + '</span></div>' +
                            '<div>' + e.content + '</div>' +
                            '</li>'
                    );
                });
            }
        }
    };
    return AppView;
});