insert into user (HN,Pwd) values
    ('hoge','test'),('fuga','test'),('piyo','test');

insert into post (UserID,Title,ImageLink1,ImageLink2,ImageLink3,ImageLink4) values
    (1,'尊い','testpath','testpath','testpath','testpath'),
    (2,'布教','testpath','testpath',NULL,NULL),
    (1,'ファンアート','testpath',NULL,NULL,NULL);

insert into nice (UserID,PostID) values
    (1,1),(1,2),(2,1),(2,3),(3,1);