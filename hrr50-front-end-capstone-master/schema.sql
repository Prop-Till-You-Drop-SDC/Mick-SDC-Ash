DROP DATABASE IF EXISTS photosdc;
CREATE DATABASE photosdc;

\c photosdc;



CREATE TABLE property (
  id SERIAL PRIMARY KEY,
  name CHAR(255) NOT NULL,
  city CHAR(255) NOT NULL,
  favorites INTEGER NOT NULL
);


CREATE TABLE Photos (
  id SERIAL PRIMARY KEY,
  propID INT REFERENCES property(id),
  photoUrl CHAR(255) NULL DEFAULT NULL
);

CREATE INDEX ON photos (propid);



--CREATE INDEX test1_id_index ON test1 (id);

--https://www.convert-in.com/import-postgresql-script.htm




--need to create index after hearing joel talk about indexing solving major issues with query time
--https://www.postgresql.org/docs/9.1/indexes-intro.html


-- confirmed this works with setting up postgresql on local machine
-- \d photogallery.photos describe table (tables are nested in schema)
