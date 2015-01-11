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
                    var _u = $($el.find('li.user_' + e.userid)[0] || '<li class="sort_' + i + ' user_' + e.userid + '"><img width="75px" src="' + e.avatar + '"/><span>' + e.name + '</span><i></i></li>');
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