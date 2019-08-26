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

