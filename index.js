

const { 
  checkConnection, 
  syncModels 
} = require("./database/index.js");
const User = require('./models/user.model.js')
const Pet = require('./models/pet.model.js')

async function createUser(body) {
  try {
    const user = await User.create(body, {
      fields: ['name', 'email', 'age']
    })
    console.log('User created')
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

async function FindUserByPk(id) {
  try {
    const user = await User.findByPk(id, {
      attributes: ["name"],
    });
    console.log("User created");
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

async function findAllUsers() {
  try {
    const users = await User.findAll({
      attributes: ['name', 'email']
    });
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

// async function createUser(body) {
//   try {
//     const user = await Pet.create(body);
//     console.log("User created");
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function startDB() {
  await checkConnection()
  await syncModels()

  // createUser({
  //   name: "Yeray",
  //   email: "yeray@gmail.com",
  //   age: 40,
  // });
  // createUser({
  //   name: "Enrique",
  //   email: "enrique@gmail.com",
  //   age: 40,
  // });
  // createUser({
  //   name: "Beneharo",
  //   email: "bene@gmail.com",
  //   age: 40,
  //   role: 'admin'
  // });
    // createUser({
    //   name: "Romina",
    //   email: "romi@gmail.com",
    //   age: 40,
    //   role: "admin",
    // });
    // createUser({
    //   name: "Monica",
    //   email: "monica@gmail.com",
    //   age: 40,
    //   role: "admin",
    // });
    //findAllUsers()
    FindUserByPk(3)
}

startDB()



