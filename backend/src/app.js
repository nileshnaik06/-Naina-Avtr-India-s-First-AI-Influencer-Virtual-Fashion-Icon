const express = require("express")
const userRoute = require("./Routes/user.routes")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/", userRoute)

module.exports = app