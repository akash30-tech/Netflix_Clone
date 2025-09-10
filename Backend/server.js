const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");


// Suppress Mongoose strictQuery warning
mongoose.set('strictQuery', false);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://AkashVerma:Akash2004@netflixclone.fjfj4ig.mongodb.net/?retryWrites=true&w=majority&appName=NetflixClone")
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("server started on port 3000");
});
