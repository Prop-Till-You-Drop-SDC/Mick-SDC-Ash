const faker = require('faker');
const { addPhotos, addProperties } = require('./index.js');
const fs = require('fs')
const csvWriter = require('csv-write-stream')


const newProperty = () => {
  const name = faker.random.word() + ' ' + faker.random.word() + ' ' + faker.random.word();
  const city = faker.address.city();
  const favorites = faker.random.number();
  const property = { name: name, city: city, favorites: favorites };
  // [location]
  // const locations = [address];
  return property

};

const newPhoto = () => {
  const name = faker.random.word() + ' ' + faker.random.word() + ' ' + faker.random.word();
  const city = faker.address.city();
  const favorites = faker.random.number();
  const property = { name: name, city: city, favorites: favorites };
  // [location]
  // const locations = [address];
  return property

};

// const writer = csvWriter()
// writer.pipe(fs.createWriteStream('instance.csv'))

// console.time('data')
// try {
//   for (let i = 1; i <= 5000000; i++) {
//     let p = newProperty();

//     writer.write({
//       id: i,
//       name: p.name,
//       city: p.city,
//       favorites: p.favorites
//     })
//   }
// } catch (error) {
//   console.error(error)
// }
// writer.end(() => {
//   console.timeEnd('data')
// })

// console.log('done')

const writer = csvWriter()
writer.pipe(fs.createWriteStream('inphoto5.csv'))

console.time('data')
try {
  for (let i = 4000001; i <= 5000000; i++) {
    for (let j = 0; j < 6; j++) {
      let photo = faker.image.city()
      writer.write({
        propId: i,
        photo: photo
      })
    }
  }
} catch (error) {
  console.error(error)
}
writer.end(() => {
  console.timeEnd('data')
})

console.log('done')