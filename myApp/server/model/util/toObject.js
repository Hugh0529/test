/**
 * Created by chy on 15-8-27.
 */
module.exports = function() {
    if(!Array.hasOwnProperty("toObject")) {
        Array.prototype.toObject = function(T) {
            var ts = [];
            this.forEach(function(r) {
                var object = new T(r);
                ts.push(object);
            });
            return ts;
        };
    }
};