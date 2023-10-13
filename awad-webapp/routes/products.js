const expressFunction = require('express')
const router = expressFunction.Router()
const Product = require('../models/product')

// Getting all
router.get('/get', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Getting One
router.get('/get/:id', getProduct, (req, res) => {
    res.json(res.product);
});

// Creating One
router.post('/create', async (req, res) => {
    const product = new Product({
        Product_Name: req.body.Product_Name,
        Product_Type: req.body.Product_Type,
        Product_IsHot: req.body.Product_IsHot,
        Product_IsCold: req.body.Product_IsCold,
        Product_IsFrappe: req.body.Product_IsFrappe,
        Product_Detail: req.body.Product_Detail,
        Product_Img: req.body.Product_Img
    })
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

// Updating One
router.patch('/patch/:id', getProduct, async (req, res) => {
    if (req.body.Product_Name != null) {
        res.productType.Product_Name = req.body.Product_Name
    }
    if (req.body.Product_Type != null) {
        res.productType.Product_Type = req.body.Product_Type
    }
    if (req.body.Product_IsHot != null) {
        res.productType.Product_IsHot = req.body.Product_IsHot
    }
    if (req.body.Product_IsCold != null) {
        res.productType.Product_IsCold = req.body.Product_IsCold
    }
    if (req.body.Product_IsFrappe != null) {
        res.productType.Product_IsFrappe = req.body.Product_IsFrappe
    }
    if (req.body.Product_Detail != null) {
        res.productType.Product_Detail = req.body.Product_Detail
    }
    if (req.body.Product_Img != null) {
        res.productType.Product_Img = req.body.Product_Img
    }

    try {
        const updateProduct = await res.product.save();
        res.json(updateProduct);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Deleting One
router.delete('/delete/:id', getProduct, async (req, res) => {
    try {
        await res.product.deleteOne()
        res.json({ message: "Deleted Product" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getProduct(req, res, next) {
    let product
    try{
        product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.product = product
    next()
}

module.exports = router