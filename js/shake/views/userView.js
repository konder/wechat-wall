/**
 * Created by zhangnan on 15/1/11.
 */
define(['jquery'
], function ($) {
    var UserView = function ($el) {
        return {
            draw: function (data) {
                $.each(data, function (i, e) {
                    var userid = e.userid.replace('@', '_');
                    var avatar = e.avatar || 'avatar/default.png';
                    var name = e.name || e.userid;
                    $el.append( $($el.find('li.user_' + userid)[0] || '<li class="sort_' + i + ' user_' + userid + '"><img width="75px" src="' + avatar + '"/><div>' + name + '</div></li>') );
                });
            },
            clear: function(){
                $el.empty();
            }
        }
    };
    return UserView;
});