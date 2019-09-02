const db = require('../database');

const nice = {
    create: function(userId, postId, cb) {
        db.query("insert into nice (UserID , PostID) values (?, ?)", [userId, postId], (err, val) => {
            if (err) throw err;
            cb();
        });
    },
    delete: function(userId, postId, cb) {
        db.query("delete from nice where UserID = ? and PostID = ?", [userId, postId], (err, val) => {
            if (err) throw err;
            cb();
        });
    },
    exists: function(userId, postId, cb) {
        db.query("select * from nice where UserID = ? and PostID = ?", [userId, postId], (err, val) => {
            if (err) throw err;
            cb(val && val.length !== 0);
        });
    },
    count: function(postId, cb) {
        db.query("select * from nice where PostID = ?", [postId], (err, val) => {
            if (err) throw err;
            cb(val.length);
        });
    }
};

module.exports = nice;