const router = require("express").Router()
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const {placeStripeOrder} = require('../controllers/order')
const Order = require("../models/Order")

//  CREATE 
router.post('/',verifyTokenAndAuthorization, placeStripeOrder)

// UPDATE
router.put("/:id",verifyTokenAndAdmin,async(req,res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body
            },
            {new:true}
        )
        res.status(200).json({success:true, data: updatedOrder})
    }catch(err){
        res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id",verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

// GET MONTHLY INCOME
router.get("/metrics",verifyTokenAndAdmin, async(req,res) => {    
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousYear = new Date(new Date().setFullYear(lastMonth.getFullYear() - 1))


    try{
        const income = await Order.aggregate([
            {$match: {
                createdAt : {$gte: previousYear},
                restaurantId:  req.user.restaurantId
            }},
            { 
                $project: {
                    month : {$month: "$createdAt"},
                    sales: "$amount"
                }
            },
            {
                $group:{
                    _id: "$month",
                    revenue: {$sum: "$sales"},
                    orders: {$sum: 1}
                }
            }
        ])
        res.status(200).json({success:true, data: income})
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

// GET TODAY's INCOME
router.get("/income/today",verifyTokenAndAdmin, async (req,res) => {
    const desiredDate = new Date()
    desiredDate.setUTCHours(0,0,0,0);
    const endOfDay = new Date()
    endOfDay.setUTCHours(23,59,59,999)
    
    try{
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt : {
                        $gte: desiredDate,
                        $lt: endOfDay
                    }
                }
            },
            {
                $group:{
                    _id: null,
                    total: {$sum: "$amount"}
                }
            }
        ])
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})

// GET User Order
router.get("/find/:userId",verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json({order})
    }catch(err){
        res.status(500).json(err)
    }
})

// GET ALL By Restaurant
router.get("/:restaurantId", verifyTokenAndAdmin, async (req,res) => {
    try{
        const {restaurantId} = req.params;
        const orders = await Order.find({restaurantId})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
