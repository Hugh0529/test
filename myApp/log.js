var log4js = require("log4js");
var log4jsConf = require("./configuration").log4js;

log4js.configure({
    appenders: [
        {
            category: "console",
            type: "console"
        }, //控制台输出

    /**
     * 注意！！！
     * 必须保持controller与server里的service和query保持文件结构一致！！！
     * 目的是保持其和logs文件夹的相对位置一致
     * 如果能用到绝对位置最好，待研究
     */

        // controller
        {
            category: "UserController",
            type: log4jsConf.type,
            filename: log4jsConf.controllerFilename,
            pattern: log4jsConf.pattern,
            alwaysIncludePattern: log4jsConf.alwaysIncludePattern
        },

        // service
        {
            category: 'UserService',
            type: log4jsConf.type,
            filename: log4jsConf.serviceFilename,
            pattern: log4jsConf.pattern,
            alwaysIncludePattern: log4jsConf.alwaysIncludePattern
        },

        //query
        {
            category: 'UserQuery',
            type: log4jsConf.type,
            filename: log4jsConf.queryFilename,
            pattern: log4jsConf.pattern,
            alwaysIncludePattern: log4jsConf.alwaysIncludePattern
        }
    ],
    replaceConsole: log4jsConf.replaceConsole,   //替换console.log
    levels:{
        console: 'DEBUG',

        // controller
        UserController: log4jsConf.level,

        // service
        UserService: log4jsConf.level,

        // query
        UserQuery: log4jsConf.level
    }
});

module.exports.logger = function(category) {
    return log4js.getLogger(category);
};

//exports.logger = log4js.getLogger('UserService');

module.exports.use = function(app) {
    /**
     * Added automatic level detection to connect-logger, depends on http status response, compatible with express 3.x.
     *
     * http responses 3xx, level = WARN
     * http responses 4xx & 5xx, level = ERROR
     * else, level = INFO
     */
    // app.js里用express默认的morgan
    //页面请求日志,用auto的话,默认级别是WARN
    //app.use(log4js.connectLogger(log4js.getLogger('app'), {level:'auto', format:':method :url'}));
    //app.use(log4js.connectLogger(log4js.getLogger('app'), {level:'debug', format:':method :url'}));
};
