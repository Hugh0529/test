/**
 * Created by chy on 15-8-30.
 */
module.exports = function() {
    if(!String.hasOwnProperty("addColon")) {
        String.prototype.addColon = function() {
            return "'" + this + "'";
        };
    }
};