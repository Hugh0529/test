/**
 * Created by chy on 15-8-21.
 */
var testQuery = require("../model/util/mysqlPool");

var getUser = function(conn) {
    var sql = "select * from test9.user limit 10";
    conn.query(sql, function(err, res) {
        if(err) {
            console.log("getUser ==> " + err);
        }else {
            console.log('The solution is: ', res);
        }
    });
};
testQuery(getUser);