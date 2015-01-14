/**
 * Created by zhangnan on 15/1/11.
 */
define(['models/message', 'wall/views/appView', '../utils', 'config', 'jquery'
], function (Message, AppView, utils, config, $) {
    var $el = $('.container');
    var $message = $el.find('.messages ul');

    var message = new Message();
    var appView = new AppView($message);


    utils.thread.run({
        callback: function () {
            message.fetch(appView.draw);
        },
        interval: config.wall.interval
    });
});