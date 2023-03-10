const express=require('express')
const cors=require('cors')
const app=express();
const data=require('./data')

app.use(cors());

app.use(express.json());

app.get("/shoes", (req, res) => {
  return res.status(200).json(data);
});

app.get("/shoes/:id", (req, res) => {
  const shoeId = req.params.id.toString();
  const shoe = data.find((shoe) => shoe.id.toString() === shoeId);
  if(shoe){
    return res.status(200).json(shoe);
  }else{
    return res.status(400).json('not found')
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
