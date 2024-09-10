const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const mongoUrl =
  "mongodb://localhost:27017/mean";
// Connect
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
//         if (err) return console.log(err);

//         closure(db);
//     });
// };

// Error handling
// const sendError = (err, res) => {
//     response.status = 501;
//     response.message = typeof err == 'object' ? err.message : err;
//     res.status(501).json(response);
// };

// Response handling
// let response = {
//     status: 200,
//     data: [],
//     message: null
// };

// Get users
// router.get('/users', (req, res) => {
//     connection((db) => {
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });

router.post("/booking",(req, res) => {
  let data = {
    numberOfSeats: req.body.numberOfSeats}
  console.log("hello")
 MongoClient.connect(mongoUrl, (err, client) => {
      if (err) {
        console.log("error in posting data to database");
        client.close();
        res.status(500).json({ message: "Request Not Implemented" });
      }
      const db = client.db("details");
      var bookingDetails = db.collection("bookingDetails");
      bookingDetails.insertOne(data, (error) => {
        if (error) {
          console.log("error in inserting formValues");
          client.close();
          res.status(500).json({ message: "Request Not Implemented" });
        }
        console.log("submitted");
        client.close();
        res.status(200).json({ message: "Booked successfully!!!" });
      });
    });
    });




module.exports = router;