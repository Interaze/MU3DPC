USE MU3DPC;

INSERT INTO SUBGROUPS(Name, Hex)
VALUES
('General', 555555),
('Beginners Group', 555555),
('Prosthetics', 555555),
('Large Printing', 555555),
('Make Mizzou', 555555);

SELECT * FROM SUBGROUPS;

INSERT INTO PROJECTS(Name, Sname, Image, Description)
VALUES
('Executive Board', 'General', 'Board.jpg', 'For Executing'),
('Outreach', 'General', 'Outreach.jpg', 'For Outreach'),
('Learning 3D Printing', 'Beginners Group', 'beginners.jpg','For Educating'),
('Research', 'Prosthetics', 'Research.jpg', 'For Outreach'),
('Design', 'Prosthetics', 'Design.jpg', 'For Design'),
('Imbedded Systems', 'Prosthetics', 'imbeddedsystems.jpg', 'For Systems'),
('FDM Printer', 'Large Printing', 'fdmprinting.jpg', 'For Large Printing'),
('Jesse Hall Map', 'Make Mizzou', 'Outreach.jpg', 'For Viewing Campus');

SELECT * FROM PROJECTS;

INSERT INTO EVENTS(Name, Posted, Description, Image, Project, Sname)
VALUES
('Fall Semester Orientation', '2020-04-28', 'Join Us For Community Outreach', 'orientation.jpg', 'Outreach', 'General'),
('Prosthetic Orientation', '2020-04-28', 'Join Us For Developing Prosthetics', 'orientationProsthetics.jpg', 'Design', 'Prosthetics'),
('Beginners Group Orientation', '2020-04-28', 'Join Us For Community Outreach', 'orientation.jpg', 'Learning 3D Printing', 'Beginners Group'),
('Large Printing Orientation', '2020-04-28', 'Join Us For Community Outreach', 'orientation.jpg', 'FDM Printer', 'Large Printing'),
('Make Mizzou Orientation', '2020-04-28', 'Join Us For Community Outreach', 'orientation.jpg', 'Jesse Hall Map', 'Make Mizzou');

SELECT * FROM EVENTS;

INSERT INTO MEMBERS(Fname, Lname, Project, Sname, Involvement, Image)
VALUES
('Andrew', 'Dove', 'Executive Board', 'General', 'President', 'dove.jpg'),
('Anthony', 'Hughes', 'Executive Board', 'General', 'Vice President', 'Huges.jpg'),
('Christopher', 'Scully', 'Executive Board', 'General', 'Treasurer', 'scully.jpg');

SELECT * FROM MEMBERS;
