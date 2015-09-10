function User(user) {
    var id = user?user.id : null,
        name = user?user.name : null,
        username = user?user.username : null,
        password = user?user.password : null,
        email = user?user.email : null,
        registerDateTime = user?user.registerDateTime : null,
        lastLoginDateTime = user?user.lastLoginDateTime : null,
        token = user?user.token : null;

    return {
        getId : function() {
            return id;
        },

        setId : function(_id) {
            id = _id;
        },

        getName : function() {
            return name;
        },

        setName : function(_name) {
            name = _name;
        },

        getUsername : function() {
            return username;
        },

        setUsername : function(_username) {
            username = _username;
        },

        getPassword : function() {
            return password;
        },

        setPassword : function(_password) {
            password = _password;
        },

        getEmail : function() {
            return email;
        },

        setEmail : function(_email) {
            email = _email;
        },

        getRegisterDateTime : function() {
            return registerDateTime;
        },

        getLastLoginDateTime : function() {
            return lastLoginDateTime;
        },

        setLastLoginDateTime : function(_lastLoginDateTime) {
            lastLoginDateTime = _lastLoginDateTime;
        },

        getToken : function() {
            return token;
        },

        setToken : function(_token) {
            token = _token;
        }

    }
};

module.exports = User;
