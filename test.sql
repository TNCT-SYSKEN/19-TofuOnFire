CREATE TABLE User(
  UserID int IDENTITY (1,1) NOT NULL,
  Name nvarchar(15) NOT NULL,
  Password varchar(20) NOT NULL,
  PRIMARY KEY (UserID),
  UNIQUE (UserID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Post (
  PostID int IDENTITY (1,1) NOT NULL,
  UserID int NOT NULL,
  Title nverchar(30),
  ImageLink1 nverchar(30),
  ImageLink2 nverchar(30),
  ImageLInk3 nverchar(30),
  ImageLink4 nverchar(30),
  PRIMARY KEY (PostID),
  FOREIGN KEY(UserID)
  REFERENCES User(UserID),
  UNIQUE (PostID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Like (
  PostID int NOT NULL,
  UserID int NOT NULL,
  FOREIGN KEY (UserID) REFERENCES User(UserID),
  FOREIGN KEY (PostID) REFERENCES Post(PostID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- testdata
