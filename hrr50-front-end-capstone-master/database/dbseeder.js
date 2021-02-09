//import connection to psql db
const { con } = require('./index.js')

//create a copy process for csv into psql

//stackexchange told me i need to let psql know about the commas

const locations = `COPY property(id, name, city, favorites) FROM '${__dirname}/files/Locations.csv' DELIMITER ',' CSV HEADER;`;
const photo1 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos1.csv' DELIMITER ',' CSV HEADER;`;
const photo2 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos2.csv' DELIMITER ',' CSV HEADER;`;
const photo3 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos3.csv' DELIMITER ',' CSV HEADER;`;
const photo4 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos4.csv' DELIMITER ',' CSV HEADER;`;
const photo5 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos5.csv' DELIMITER ',' CSV HEADER;`;
const photo6 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos6.csv' DELIMITER ',' CSV HEADER;`;
const photo7 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos7.csv' DELIMITER ',' CSV HEADER;`;
const photo8 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos8.csv' DELIMITER ',' CSV HEADER;`;
const photo9 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos9.csv' DELIMITER ',' CSV HEADER;`;
const photo10 = `COPY photos(propid, photourl) FROM '${__dirname}/files/Photos10.csv' DELIMITER ',' CSV HEADER;`;

con.query(locations)
  .then(() => {
    console.log('loc seeded');
    con.query(photo1).then(() => { console.log('first batch') })
    con.query(photo2).then(() => { console.log('second batch') })
    con.query(photo3).then(() => { console.log('third batch') })
    con.query(photo4).then(() => { console.log('fourt batch') })
    con.query(photo5).then(() => { console.log('fifth batch') })
    con.query(photo6).then(() => { console.log('sixth batch') })
    con.query(photo7).then(() => { console.log('seventh batch') })
    con.query(photo8).then(() => { console.log('eight batch') })
    con.query(photo9).then(() => { console.log('ninth batch') })
    con.query(photo10).then(() => { console.log('tenth batch') })
  })
  .catch(err => console.error('issue found', err));


