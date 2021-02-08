DROP DATABASE IF EXISTS photosdc;
CREATE DATABASE photosdc;

\c photosdc;



CREATE TABLE Property (
  id SERIAL PRIMARY KEY,
  name CHAR(255) NOT NULL,
  location CHAR(255) NOT NULL,
  favorites INTEGER NOT NULL
);


CREATE TABLE Photos (
  id SERIAL PRIMARY KEY,
  photoUrl CHAR(255) NULL DEFAULT NULL,
  propID INT REFERENCES Property (id)
);

--CREATE INDEX ON Photos (propID);


--CREATE INDEX test1_id_index ON test1 (id);




--need to create index after hearing joel talk about indexing solving major issues with query time
--https://www.postgresql.org/docs/9.1/indexes-intro.html


-- confirmed this works with setting up postgresql on local machine
-- \d photogallery.photos describe table (tables are nested in schema)
