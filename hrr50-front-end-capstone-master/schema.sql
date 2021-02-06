DROP SCHEMA IF EXISTS PhotoGallery;
CREATE SCHEMA PhotoGallery;



CREATE TABLE PhotoGallery.Property (
  id SERIAL,
  name CHAR(255) NULL DEFAULT NULL,
  location CHAR(255) NULL DEFAULT NULL,
  favorites INTEGER NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE PhotoGallery.Photos (
  id SERIAL,
  photoUrl CHAR(255) NULL DEFAULT NULL,
  propertyID INT,
  PRIMARY KEY (id)
);
