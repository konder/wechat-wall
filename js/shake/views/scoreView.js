/**
 * Created by zhangnan on 15/1/11.
 */
define(['jquery'
], function ($) {
    var ScoreView = function ($el) {
        return {
            draw: function (data) {
                var topTen = data.slice(0, 10);
                var total = 0;
                $.each(topTen, function(i, e){
                    total += e.score;
                });
                $.each(topTen, function (i, e) {
                    var userid = e.userid.replace('@', '_');
                    var avatar = e.avatar || 'avatar/default.png';
                    var name = e.name || e.userid;
                    var _u = $($el.find('li.user_' + userid)[0] || '<li class="sort_' + i + ' user_' + userid + '"><img width="75px" src="' + avatar + '"/><span>' + name + '</span><i></i></li>');
                    _u.find('i').text( Math.floor(e.score*100/total) );
                    $el.append(_u);
                });
            },
            clear: function(){
                $el.empty();
            }
        }
    };
    return ScoreView;
});