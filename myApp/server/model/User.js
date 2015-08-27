/**
 * Created by chy on 15-8-26.
 */
function User(user) {
    var id,
        name,
        username,
        password,
        email,
        registerDateTime,
        lastLoginDateTime,
        token;

    if(user) {
        id = user.id;
        name = user.name;
        username = user.username;
        password = user.password;
        email = user.email;
        token = user.token;
    }

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
