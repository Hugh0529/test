/**
 * Created by chy on 15-8-20.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test9',
    port: 3306
});

var createConn = function (queryFunction) {
    pool.getConnection(function (err, conn) {
        if (!err) {
            queryFunction(conn);
            conn.release();
        } else {
            console.log("POOL ==> " + err);
        }
    });
};
module.exports = createConn;