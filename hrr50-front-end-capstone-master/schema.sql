DROP DATABASE IF EXISTS airBnB;
CREATE DATABASE airBnB;

USE airBnB;


CREATE TABLE `Property` (
  `id` INTEGER AUTO_INCREMENT,
  `name` CHAR(255) NULL DEFAULT NULL,
  `favorites` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `Photos` (
  `id` INTEGER AUTO_INCREMENT,
  `photoUrl` CHAR(255) NULL DEFAULT NULL,
  `propertyID` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Join` (
  `id` INTEGER AUTO_INCREMENT,
  `propertyID` INTEGER,
  `photoID` INTEGER,
  PRIMARY KEY (`id`),
  FOREIGN KEY (propertyID) REFERENCES `Property`(`id`),
  FOREIGN KEY (photoID) REFERENCES `Photos`(`id`)
);
