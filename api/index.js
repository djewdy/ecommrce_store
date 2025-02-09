const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const mongoose = require("mongoose")
const databaseSeeder = require('./databaseSeeder')
const userRoute = require('./routes/User')
const productRoute = require('./routes/Product')
const orderRoute = require('./routes/Order')



mongoose.connect(process.env.mongooseDb).then(()=>console.log("db connceted")).then((err)=>{
    err;
})

app.use(express.json());

app.use("/api/seed", databaseSeeder);

app.use("/api/users", userRoute);

app.use("/api/products", productRoute);

app.use("/api/orders", orderRoute);

app.listen(PORT || 9000 , ()=>{
    console.log(`This server is runing on ${PORT}`);
})


//dbusername:joudiammouri
//dbpassword:Xzk05jWFFtkzGgYX
