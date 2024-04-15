const express = require("express");
const cors = require("cors")
const app = express();
const mainRouter = require("./routes/index")
const port = 3000

app.use(cors())

app.use("/api/v1", mainRouter) //this heads to main router for the v1 of the api

app.use(express.json());

app.listen(port,()=>{
    console.log(`The app is running on the port${port}`)
})



