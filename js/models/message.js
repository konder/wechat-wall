/**
 * Created by zhangnan on 15/1/11.
 */
define(['config', 'jquery'], function (config, $) {
    var Message = function () {
        return{
            fetch: function (_callBack) {
                $.ajax({
                    type: 'GET',
                    url: config.backend + 'message',
                    dataType: "jsonp",
                    success: function (data) {
                        _callBack(data);
                    },
                    error: function(e){
                        console.log(e);
                    }
                });
            }
        }
    };

    return Message;
});
