//Importing express module which we installed
const express = require("express");

//Importing file system library for file interaction
const fs = require("fs");

//Port at which the server will run
const PORT = 3000;
const app = express();

//Base API to create the file and insert text as date timestamp
app.get("/", (req, res) => {
  const date = new Date();
  let fileName =
    "./allfolders/" +
    date.getDate().toString() +
    "-" +
    date.getMonth().toString() +
    "-" +
    date.getFullYear().toString() +
    "#" +
    date.getHours().toString() +
    "-" +
    date.getMinutes().toString() +
    "-" +
    date.getSeconds().toString() +
    "-" +
    date.getMilliseconds().toString() +
    ".txt";
  fs.mkdir("./allfolders", (error) => {
    console.log(error);
  });
  fs.writeFile(fileName, `${Date.now()}`, (err) => {
    //It will log error in case if file is already available
    console.log(err);
  });
  //Sending acknowledgement as an response
  res.send("File is created at ./allfolders");
});

//Starting the express server with message on console
app.listen(PORT, () => {
  console.log("Server started!");
});
