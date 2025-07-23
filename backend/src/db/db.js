const mongoose = require("mongoose");


function connectDB() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to Database")
        }).catch((err) => {
            console.log(`Failed to connect ${err}`)
        })
}

module.exports = connectDB