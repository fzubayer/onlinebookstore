var db = require('./db')

module.exports = {

    getById: function(id, callback) {

        var sql = "select * from user where id=?";
        db.getResults(sql, [id], function(result) {
            if (result.length > 0) {
                callback(result[0]);
            } else {
                callback([]);
            }
        });
    },
    validate: function(user, callback) {
        var sql = "select * from employee where ID=? and password=? and type=?";
        db.getResults(sql, [user.username, user.password, user.type], function(result) {

            if (result.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    }
    }
    
