
import { main } from "./Db.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors());

app.use(bodyParser.json())



app.post("/signupDetails", async (req, res) => {
  const collection = await main();
  const data = req.body;
  const {phoneNumber}=data;
  const insertData = await collection.insertOne(data);
  
  console.log("successfully inserted",data);
});


app.post("/signinDetails",async(req,res)=>{
  const collection = await main();
  const data= req.body;
  const {email}=data;
  const user=await collection.findOne({email :email});
  console.log(user)



})


main();
app.listen(3820, () => {
  console.log("3820");
});
