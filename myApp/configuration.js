/**
 * Created by chy on 15-8-29.
 */
module.exports = {
    mysql : {
        ost: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test9',
        port: 3306
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
    }
};
