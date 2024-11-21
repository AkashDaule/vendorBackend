const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://EV:Mahi123@cluster0.tadgngw.mongodb.net/inventory-db?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected...!")
})
.catch((err)=>{
    console.log("err:", err)
})