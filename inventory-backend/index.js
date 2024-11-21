const express = require('express');
const app = express();
var cors = require('cors')
const indexRouter = require("./routes/indexRouter")
require("./database")

//--- added the json data access------//
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Running On 3000")
})

app.use("/inventory", indexRouter)


let port = 3001
app.listen(port, () => {
    console.log("Running on :", port)
})