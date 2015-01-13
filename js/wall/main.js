require.config({
    baseUrl: '.',
    map: {
        '*': {
            // 这个是一个很脏的把戏， 因为压缩时，r.js必须依靠text.js, 所以不能
            // 将text设置成为"empty:", 为了避免将text.js压缩到r.js中， 必须将其
            // 加入到excludes中, 具体看https://github.com/jrburke/r.js/issues/221
            text: "bower_components/text/text",
            css: "bower_components/require-css/css"
        }
    },
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'jquery': "bower_components/jquery/dist/jquery.min",
        'underscore': "bower_components/underscore/underscore",
        'bootstrap': "bower_components/bootstrap/dist/js/bootstrap.min",
        'underscore.string': "bower_components/underscore.string/lib/underscore.string",
        'wall': "js/wall",
        'models': "js/models",
        'utils': "js/utils",
        'config': "js/config",
        'localconfig': "js/localconfig",
        'text': "bower_components/text/text",
        'css': "bower_components/require-css/css"
    },
    shim: {
        'underscore.string': {"deps": ["underscore"]}
    }
});
require(['wall/app'], function () {});