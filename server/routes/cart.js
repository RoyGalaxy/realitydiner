const router = require("express").Router()
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Cart = require("../models/Cart")

//  CREATE
router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if(req.body.products._id){
        req.body.productId = req.body._id
    }
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE USER CART
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.id })
        const updatedCart = await Cart.findByIdAndUpdate(cart._id,
            {
                $set: req.body
            },
            {new:true}
        )
        res.status(200).json(updatedCart).end()
    } catch (err) {
        console.log(err)
        res.status(500).json(err).end()
    }
})

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    console.log(req.params.id)
    try {
        await Cart.findOneAndDelete({ userId: req.params.id })
        res.status(200).json("Cart has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET User Cart
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.id })
        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err)
    }
})
// GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
