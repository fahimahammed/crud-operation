const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/person", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = mongoose.connection;

connect.on("open", () => {
    console.log("connected....");
})

app.use(express.json());
const campusRouter = require('./routes/campus');

app.use('/campus', campusRouter);

app.listen(3000, () => {
    console.log("server running");
})