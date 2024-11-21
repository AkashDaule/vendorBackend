const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({

    itemName: {
        type: String,
        index: true,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalValue: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    status: {
        type: Boolean,
        default:true
    }

}, 
{

    timestamps: true

})


const inventoryModel = mongoose.model('inventory_masters',inventorySchema);

module.exports = inventoryModel