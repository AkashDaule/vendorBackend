
const inventoryModel = require("../model/inventoryModel")

//----- Add user data-----------//
exports.add = async (req, res) => {
    try {
        const { itemName, quantity, price, category } = req.body;
        const totalValue = quantity * price
        const userData = await new inventoryModel({ itemName, quantity, price, category, totalValue }).save();

        return res.json({
            status: true,
            message: "Inventory added successfully...!",
            data: userData
        })

    } catch (err) {
        console.log("err", err)
        return res.json({
            status: false,
            message: err,
            data: []
        })
    }
}

exports.getAll = async (req, res) => {
    try {

        const userData = await inventoryModel.find({status:true}).exec();
        return res.json({
            status: true,
            message: "Get all inventory...!",
            data: userData
        })

    } catch (err) {
        return res.json({
            status: false,
            message: err,
            data: []
        })
    }

}


exports.delete = async (req, res) => {
    try {
        
        const userData = await inventoryModel.findByIdAndUpdate({_id:req.params.id},{
            status:false
        }).exec();
        return res.json({
            status: true,
            message: "Inventory is deleted...!",
            data: userData
        })

    } catch (err) {
        return res.json({
            status: false,
            message: err,
            data: []
        })
    }
}


exports.update = async (req, res) => {
    try {
        const { itemName, quantity, price, category } = req.body;
        const totalValue = quantity * price
        const userData = await inventoryModel.findByIdAndUpdate({_id:req.params.id},{
            itemName, quantity, price, category, totalValue
        }).exec();
        return res.json({
            status: true,
            message: "Inventory is updated...!",
            data: userData
        })

    } catch (err) {
        return res.json({
            status: false,
            message: err,
            data: []
        })
    }
}

