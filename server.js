const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
//require('dotenv').config()
dotenv.config()
app.use(express.json())

//app.use("/api", require("./routes/contactRoutes"))



const port = process.env.PORT || 8080


mongoose.connect(process.env.MONGO_URI).then( () => console.log("database connected"))
.catch(error => console.log(error))


app.use("/api", require("./routes/contactRoutes") )


app.listen(port , (err) => {
    err ? console.log(err) : console.log('server is running:', port)
});