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
      {Product_Name: "ชาชาชักชัก", Product_Type: "Tea", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: true,
        Product_Detail_Hot: "ชาชักร้อน ๆ กินแล้วชักไม่หยุด",
        Product_Price_Hot: 40,
        Product_Img_Hot: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png",
        Product_Detail_Cold: "ชาชักเย็น ๆ หนาว ๆ กินแล้วชักไม่หยุด",
        Product_Price_Cold: 50,
        Product_Img_Cold: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png",
        Product_Detail_Frappe: "ชาชักปั่น ๆ ไม่เอาจริง กินแล้วชักไม่หยุด",
        Product_Price_Frappe: 60,
        Product_Img_Frappe: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png",
        __v: 0},
      {Product_Name: "ชาลีลีลา", Product_Type: "Tea", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: false,
        Product_Detail_Hot: "ลีลาตัวตึง ร้อนๆ",
        Product_Price_Hot: 40,
        Product_Img_Hot: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png",
        Product_Detail_Cold: "ลีลาตัวตึง เย็นๆ",
        Product_Price_Cold: 50,
        Product_Img_Cold: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png",
        Product_Detail_Frappe: "None",
        Product_Price_Frappe: 0,
        Product_Img_Frappe: "None",
        __v: 0},
      {Product_Name: "กามู", Product_Type: "Coffee", Product_IsHot: false, Product_IsCold: true, Product_IsFrappe: false, 
        Product_Detail_Hot: "None",
        Product_Price_Hot: 0,
        Product_Img_Hot: "None",
        Product_Detail_Cold: "กามู กูมา เย็น ๆ ตึง ๆ",
        Product_Price_Cold: 50,
        Product_Img_Cold: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png",
        Product_Detail_Frappe: "None",
        Product_Price_Frappe: 0,
        Product_Img_Frappe: "None",
        __v: 0},
    ];
    // Insert the defined document into the "haiku" collection
    const result = await products.insertMany(doc);
    // Print the ID of the inserted document
    console.log(`products: okay`);
    
    const productTypes = database.collection("product_types");
    const doc1 = [
      {ProductType_Name: "Coffee", __v: 0},
      {ProductType_Name: "Tea", __v: 0}
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