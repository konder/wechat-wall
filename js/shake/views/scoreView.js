/**
 * Created by zhangnan on 15/1/11.
 */
define(['jquery'
], function ($) {
    var ScoreView = function ($el) {
        return {
            draw: function (data) {
                var topTen = data.slice(0, 7);
                var total = 0;
                $.each(topTen, function(i, e){
                    total += e.score;
                });
                $.each(topTen, function (i, e) {
                    var userid = e.userid.replace('@', '_');
                    var avatar = e.avatar || 'avatar/default.png';
                    var name = e.name || e.userid;
                    var _u = $($el.find('li.user_' + userid)[0] || '<li class="sort_' + i + ' user_' + userid + '">' +
                        '<div class="row" style="height: 44px;line-height: 44px;">' +
                            '<div class="col-md-2">' +
                                //'<img width="40px" src="' + avatar + '"/>' +
                                '<span class="name">' + name + '</span>' +
                            '</div>' +
                            '<div class="col-md-10" style="padding-top: 4px;">' +
                                '<div class="progress">' +
                                    '<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '</li>');
                    _u.find('span.name').text(name);
                    _u.find('img').attr('src', avatar);
                    var per = Math.floor(e.score*100/total);
                    _u.find('div.progress-bar').attr('aria-valuenow', per).css('width', per +'%').text(per+'%');

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