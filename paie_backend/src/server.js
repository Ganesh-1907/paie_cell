import cors from "cors";
import express from 'express';
import { connectToDB, db } from './db.js';

const app=express()
app.use(express.json())
app.use(cors())


app.post('/flashnews/:flash',async(req,res)=>{
    const details=await db.collection("Flashnews").deleteMany() && await db.collection("Flashnews").insertOne({flash:req.params.flash});
    res.json(details)
})

app.post('/flashnews',async(req,res)=>{
    const details=await db.collection("Flashnews").find().toArray()
    res.json(details);
})

app.post('/admin-event/:day/:month/:year/:event/:details',async(req,res)=>{
    const details=await db.collection("events-update").insertOne({
        day:req.params.day,
        month : req.params.month,
        year : req.params.year,
        event:req.params.event,
        details:req.params.details
       });
    res.json(details)
})

app.post('/events/',async(req,res)=>{
    const details=await db.collection("events-update").find({}).sort({_id : -1}).toArray()
    res.json(details);
})
app.post('/addphotos',async(req,res)=>
{
    await db.collection("Coruselphotos").insertOne({imageName:req.body.imgname,imageCode:req.body.name,Link:req.body.url})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>
    {
        console.log("try again");
    })
})
app.post('/photos',async(req,res)=>
{
    await db.collection("Coruselphotos").find().toArray()
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>
    {
        console.log("OK cool");
    })
})
app.post('/delphoto/:photo',async(req,res)=>
{
    await db.collection("Coruselphotos").deleteOne({imageCode:req.params.photo})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>
    {
        console.log("OK cool");
    })
})


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log('server Running at port 8000')
    })
}
)