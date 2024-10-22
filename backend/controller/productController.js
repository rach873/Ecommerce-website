const ProductModel = require("../models/productModel");

exports.getProducts = async (req, res, next) => {
  try {
    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}
    const products = await ProductModel.find(query);
    
  
    console.log("Fetched products:", products); // Log products
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error); // Log errors
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getSingleProducts = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to get Product with that ID",
    });
  }
};
