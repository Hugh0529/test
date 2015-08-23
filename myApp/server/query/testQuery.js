/**
 * Created by chy on 15-8-21.
 */
var mysqlPool = require("../model/util/mysqlPool");
var testQuery = {};

var getUser = function(conn, serviceFunction) {
    var sql = "select * from test9.user limit 10";
    var getUserRes;
    conn.query(sql, function(err, res) {
        if(err) {
            console.log("getUser ==> " + err);
        }else {
            console.log('The query solution is: ', res);
            getUserRes = res;
        }
    });
    return getUserRes;
};
testQuery.getUser = mysqlPool(getUser);

module.exports = testQuery;