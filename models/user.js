const db = require('../database');

const user = {
    exists: function(userId, cb) {
        db.query("select * from user where UserID = ?", [userId], (err, val) => {
            if (err) throw err;
            cb(val.length !== 0);
        });
    },
    create: function(userId, cb) {

    },
    delete: function(userId) {
        
    }
};

module.exports = user;
