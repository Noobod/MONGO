const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.finsByIdAndDelete("680c9a48fc29d2b2acf50e2e").then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// User.deleteMany({age: {$gt: 48}}).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// User.deleteOne({name: "Bruce"}).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// User.findByIdAndUpdate({name: "Adam"}, {age: 65}, {new: true})
// .then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err);
// });

// User.findOneAndUpdate({name: "Bruce"}, {age: 35}, {new: true})
// .then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err);
// });

// User.updateMany({age: {$gt: 48}}, {age: 55})
// .then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err);
// });

// User.updateOne({name: "Bruce"}, {age: 49}).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err);
// });

// User.findById('680c9a48fc29d2b2acf50e2c').then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// User.insertMany([
//     {name: "Toni", email: "toni@gamil.com", age: 50},
//     {name: "Bruce", email: "bruce@gmail.com", gae: 45},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
// ]).then((res) => {
//     console.log(res);
// });

// const user1 = new User({
//   name: "adam",
//   email: "adam@yahoo.in",
//   age: 48,
// });

// const user2 = new User({
//   name: "eve",
//   email: "eve@yahoo.in",
//   age: 45,
// });

// user1.save();

// user2.save().then((res) => {
//   console.log(res);
// }).catch(err => {console.log(err);
// });
