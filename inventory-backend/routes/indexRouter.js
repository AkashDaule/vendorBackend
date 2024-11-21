
const express = require("express");
const app = express();
const inventoryController = require("../controller/inventoryController")


//-------list all  ---------//
app.get("/", inventoryController.getAll)

// ------add  data ----------//
app.post("/add", inventoryController.add)

//--------delete---------//
app.delete("/delete/:id", inventoryController.delete)

//------update---------//
app.patch("/update/:id", inventoryController.update)


module.exports = app