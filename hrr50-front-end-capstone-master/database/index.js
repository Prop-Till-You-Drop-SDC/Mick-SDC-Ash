const pgp = require('pg-promise')();


const HOST = 'localhost';
const PORT = 5432;
const DB = 'photosdc';

const conn_str = `postgres://${HOST}:${PORT}/${DB}`;
const con = pgp(conn_str);

//https://node-postgres.com/features/connecting
//https://www.postgresql.org/docs/10/libpq-connect.html
//https://stackoverflow.com/questions/53381429/how-to-use-connection-string-with-sequel-for-postgresql


//legacy funcs

// const addProperties = (name, location, favorites, callback) => {
//   con.query(
//     'INSERT INTO Property (name, location, favorites) VALUES (?, ?, ?)', [name, location, favorites], callback,
//   );
// };

// const addPhotos = (photoURL, id, callback) => {
//   con.query(
//     'INSERT INTO Photos (photoUrl, propertyID) VALUES (?, ?)', [photoURL, id], callback,
//   );
// };

const retrieveOneProperty = (index, callback) => {
  con.query(
    `Select name, city, favorites, photourl, photos.id from property INNER JOIN photos on photos.propid = property.id where property.id = ${index}`)
    .then(result => {
      callback(result)
    })
};

module.exports = {
  con,
  retrieveOneProperty
};
