const db = require('../database');

const post = {
    getList: function(postIds, cb) {
        db.query("select PostID,UserID,Title,ImageLink1 from post where PostID in (?)", [postIds], (err, val) => {
            if (err) throw err;
            cb(val);
        });
    },
    getDetail: function(postId, cb) {
        db.query("select * from post where PostID = ?", [postId], (err, val) => {
            if (err) throw err;
            cb(val[0]);
        });
    },
    create: function(userId, title, imageLinks, cb) {
        console.log(imageLinks[0]);
        db.query("insert into post (UserID,Title,ImageLink1,ImageLink2,ImageLink3,ImageLink4) values (?, ?, ?, ?, ?, ?)", [userId, title, imageLinks[0], imageLinks[1], imageLinks[2], imageLinks[3]], (err, val) => {
            if (err) throw err;
            cb();
        });
    },
    exists: function(postId, cb) {
        db.query("select * from post where PostID = ?", [postId], (err, val) => {
            if (err) throw err;
            cb(val && val.length !== 0);
        });
    },
    getLatestPostId: function(cb) {
        db.query("select PostID from post where PostID=(select MAX(PostID) from post)", (err, val) => {
            if (err) throw err;
            cb(val[0].PostID);
        });
    }
};

module.exports = post;