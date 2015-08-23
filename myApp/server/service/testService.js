/**
 * Created by chy on 15-8-21.
 */
var testQuery = require("../query/testQuery");
var testService = {};

testService.getUser = function (param) {
    var res = testQuery.getUser;
    console.log('The service solution is: ', res);
    return res;
};
testService.getUser();

module.exports = testService;