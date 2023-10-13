const { MongoClient } = require('mongodb');
const Product = require('./models/product.js');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("cafe");
    const products = database.collection("products");
    
    const doc = [
      {Product_Name: "ชาชาชักชัก", Product_Type: "Tea", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: false, Product_Detail: "กินแล้วชักไม่หยุด", Product_Img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png"},
      {Product_Name: "ชาลีลีลา", Product_Type: "Tea", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: false, Product_Detail: "ลีลาตัวตึง", Product_Img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png"},
      {Product_Name: "กามู", Product_Type: "Coffee", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: false, Product_Detail: "กูมา", Product_Img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png"},
    ];
    // Insert the defined document into the "haiku" collection
    const result = await products.insertMany(doc);
    // Print the ID of the inserted document
    console.log(`products: okay`);
    
    const productTypes = database.collection("product_types");
    const doc1 = [
      {ProductType_Name: "Coffee"},
      {ProductType_Name: "Tea"}
    ];
    const result1 = await productTypes.insertMany(doc1);
    console.log(`product_types: okay`);

  } finally {
     // Close the MongoDB client connection
    await client.close();
  }

}

// Run the function and handle any errors
run().catch(console.dir);