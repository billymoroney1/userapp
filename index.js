const db = require('./models')

// db.user.create({
//     firstName: 'Fatima',
//     lastName: 'Gomez',
//     age: 1
// })
// .then(createdUser=>{
//     // the create promise returns the new row
//     // of data that has been created
//     // (otherwise it throws an error)
//     console.log('Created User: ', createdUser)
// })

// db.user.findAll()
// .then(foundUsers=>{
//     // callback recieves array of users from table
//     console.log('Found Users:', foundUsers)
// })

db.user.findOne({
    where: {firstName:'Taylor'}
}).then(foundUser=>{
    console.log('found user:', foundUser.dataValues.firstName)
})

// db.user.findOrCreate({
//     where: {
//         firstName: 'Mateen',
//         lastName: null
//     },
//     defaults: {
//         email: 'mateen@isthecoolest.com',
//         age: 345
//     }
// })
// .then(([foundOrCreatedUser, created])=>{
//     console.log('found or created user: ', foundOrCreatedUser)
//     console.log('Already existed in database?', !created)
// })

// db.user.update({
//     age: 25
// },
// {
//     where: {
//         firstName: 'Fatima'
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// })

// db.user.destroy({
//     where: {firstName: 'Fatima'}
// })
// .then(numRowsDeleted=>{
//     console.log(numRowsDeleted)
// })