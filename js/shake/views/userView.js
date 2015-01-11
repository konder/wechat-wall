/**
 * Created by zhangnan on 15/1/11.
 */
define(['jquery'
], function ($) {
    var UserView = function ($el) {
        return {
            draw: function (data) {
                $.each(data, function (i, e) {
                    $el.append( $($el.find('li.user_' + e.userid)[0] || '<li class="sort_' + i + ' user_' + e.userid + '"><img width="75px" src="' + e.avatar + '"/><span>' + e.name + '</span></li>') );
                });
            },
            clear: function(){
                $el.empty();
            }
        }
    };
    return UserView;
});