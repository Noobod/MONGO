const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: "20",
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price is too low for Amazon selling"], 
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("680dcc1508f4ea8bb89b08a2", { price: -100 }, {runValidators: true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book1 = new Book({
//     title: "Mathmatics XII",
//     author: "RD Sharma",
//     price: 1200,
// });
// book1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// let book2 = new Book({
//     title: "Gone Girl",
//     price: "399",
//     category: "fiction",
// });
// book2.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });
