import express from 'express';
import cors from "cors";
import {db,connectToDB} from './db.js';

const app=express()
app.use(express.json())
app.use(cors())

app.post('/admin-event/:date/:event',async(req,res)=>{
    const details=await db.collection("events-update").insertOne({
        date:req.params.date,
        event:req.params.event
       });
    res.json(details)
})

// app.get('/event/',async(req,res)=>{
//     const details =await db.collection("events-update").find({}).toArray()
//     res.json(details);
// })

app.get('/events/',async(req,res)=>{
    const details=await db.collection("events-update").find({}).toArray()
    res.json(details);
})


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log('server Running at port 1907')
    })
}
)