define(['localconfig'], function (localconfig) {

    var defaultSettings = {
        'backend': '/',  // 用于指定后端服务器路径， 可以是"/api/", 或者"http://<ip>:<port>/api/", 必须以'/'结尾
        'shake': {
            'interval': 500, //结果刷新间隔
            'period': 20 // 摇一摇游戏时间
        },
        'wall': {
            'interval': 2000, //结果刷新间隔
            'count': 3
        }
    }

    function Config() {
        this.backend = localconfig.backend || defaultSettings.backend;
        this.shake = localconfig.shake || defaultSettings.shake;
        this.wall = localconfig.wall || defaultSettings.wall;
        return this;
    }

    return new Config();
});
