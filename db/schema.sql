CREATE DATABASE crittersDB;
USE crittersDB;

CREATE TABLE critters
(
id int NOT NULL AUTO_INCREMENT,
critter varchar(255) NOT NULL,
free boolean false,
PRIMARY KEY (id)
);
