const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/form")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  event: String,
});

const Event = mongoose.model("Event", courseSchema);

async function createCurse() {
  const event = new Event({
    firstName: "Maciej",
    lastName: "Łanędzki",
    email: "email@gmail.com",
    event: "2020-12-12",
  });

  const result = await event.save();
  console.log(result);
}

createCurse();
