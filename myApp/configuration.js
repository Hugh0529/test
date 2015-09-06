/**
 * Created by chy on 15-8-29.
 */
module.exports = {
    mysql : {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test9',
        port: 3306,
        connectionLimit: 50, // 允许连接数，具体多少待测试，默认为10
        multipleStatements: true // 可否一个query里多个查询
    },

    session : {
        secret: 'test98', // secret 用来防止篡改 cookie
        key: 'test9',//cookie name
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}, //30 days
        //store: new MongoStore({
        //    db: settings.db,
        //    host: settings.host,
        //    port: settings.port
        //})
        resave: false,
        saveUninitialized:true
    },

    log4js : {
        type: "dateFile",
        controllerFilename: "../../logs/test9.log",
        serviceFilename: "../../logs/test9.log",
        queryFilename: "../../logs/test9.log",
        pattern: "-yyyy-MM-dd",
        alwaysIncludePattern: false,
        level: "DEBUG",
        replaceConsole: true
    }
};
