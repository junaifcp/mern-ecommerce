const Product=require("../models/productModel")


//Create product
exports.createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body)
    res.status(200).json({success:true,product})
}

//Get all products
exports.getAllProducts=async(req,res)=>{
    const products=await Product.find()
    res.status(200).json({success:true,products})
}

//update3 product
exports.updateProduct=async(req,res)=>{
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
            
        })
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        product
    })
}
//delete product
exports.deleteProduct=async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({success:false,message:"product not found"})
    }
    await product.remove()
    res.status(200).json({success:true,message:"Product has been deleted successfully"})
}
//get product details
exports.getProductDetails=async(req,res,next)=>{
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    res.status(200).json({success:true,product})
}