module.exports = function() {
    if(!Array.hasOwnProperty("toObject")) {
        Array.prototype.toObject = function(T) {
            if(this && this.length > 0) {
                var ts = [];
                this.forEach(function(r) {
                    var object = new T(r);
                    ts.push(object);
                });
                return ts;
            }
            return [];
        };
    }
};