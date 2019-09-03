CREATE TABLE User(
  UserID int AUTO_INCREMENT NOT NULL,
  HN nvarchar(15) NOT NULL,
  Pwd nvarchar(20) NOT NULL,
  PRIMARY KEY (UserID),
  UNIQUE (UserID)
);

CREATE TABLE Post (
  PostID int AUTO_INCREMENT NOT NULL,
  UserID int NOT NULL,
  Title nvarchar(30),
  ImageLink1 nvarchar(30) NOT NULL,
  ImageLink2 nvarchar(30),
  ImageLInk3 nvarchar(30),
  ImageLink4 nvarchar(30),
  PRIMARY KEY(PostID),
  FOREIGN KEY(UserID)
  REFERENCES User(UserID),
  UNIQUE(PostID)
);

CREATE TABLE Nice (
  PostID int NOT NULL,
  UserID int NOT NULL,
  FOREIGN KEY(UserID) REFERENCES User(UserID),
  FOREIGN KEY(PostID) REFERENCES Post(PostID)
);

-- 各機能で使用する操作(これを使うかどうかは知らない)

/* 一番新しい投稿のIDを取得
select PostID from post where PostID=(select MAX(PostID) from post); */

/* 投稿リストを取得
select PostID,UserID,Title,ImageLink1 from post where PostID = x;
(配列を作成したらこれをループすることでデータを取得？) */

/* 詳細を取得
select * from post where PostID = x; */

/* プレゼンを投稿する
insert into post (UserID,Title,ImageLink1,ImageLink2,ImageLink3,ImageLink4) values (...); */

/* 投稿が存在するか確認する
select * from post where PostID = x; 
なければNULLなので */

/* 投稿へいいねする
insert into nice (UserID , PostID) values (...); */

/* 投稿へのいいねを取り消す
delete from nice where UserID = x and PostID = y; */

/* ユーザが存在するかを取得する
select * from user where UserID = x; 
NULLか否かで判断できる */
