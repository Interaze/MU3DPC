USE MU3DPC;

CREATE TABLE SUBGROUPS(
Name varchar(30) PRIMARY KEY,
Hex int(6) DEFAULT '030303'
);

CREATE TABLE PROJECTS(
Name varchar(30) NOT NULL,
Sname varchar(30) NOT NULL,
Image varchar(30) DEFAULT 'Default.jpg',
Description VARCHAR(1000),
PRIMARY KEY(Name, Sname),
CONSTRAINT FK_PROJECTS FOREIGN KEY (Sname) REFERENCES SUBGROUPS (Name)
);

CREATE TABLE EVENTS(
Name varchar(30) NOT NULL,
Posted date,
Description varchar(400) NOT NULL,
Image varchar(30) NOT NULL,
Project varchar(30) NOT NULL,
Sname varchar(30) NOT NULL,
PRIMARY KEY(Name, Posted),
CONSTRAINT FK_EVENTS FOREIGN KEY (Project, Sname) REFERENCES PROJECTS (Name, Sname) ON DELETE CASCADE
);

CREATE TABLE MEMBERS(
Fname varchar(30) NOT NULL,
Lname varchar(30) NOT NULL,
Project varchar(30) NOT NULL,
Sname varchar(30) NOT NULL,
Involvement varchar(20) NOT NULL,
Image varchar(30) NOT NULL,
CONSTRAINT FK_MEMBERS FOREIGN KEY (Project, Sname) REFERENCES PROJECTS (Name, Sname) ON DELETE CASCADE
);
