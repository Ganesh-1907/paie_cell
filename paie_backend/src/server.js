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

// **************************************Coursel**********************************************//
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



// ****************************************Activities ************************************************* //
app.post('/addactivity',async(req,res)=>
{
    await db.collection("Activities").insertOne({Theme:req.body.theme,Description:req.body.desc,imageCode:req.body.name,Link:req.body.url})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>
    {
        console.log("try again");
    })
})
app.post('/actiphotos',async(req,res)=>
{
    await db.collection("Activities").find().toArray()
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>
    {
        console.log("OK cool");
    })
})
app.post('/delactiphoto/:photo',async(req,res)=>
{
    await db.collection("Activities").deleteOne({imageCode:req.params.photo})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>
    {
        console.log(e);
    })
})


// *************************************************Gallery*****************************************//
app.post('/addgallery',async(req,res)=>
{
    await db.collection("Gallery").findOne({Theme:req.body.theme})
    .then(async(details1)=>
    {
        if(details1)
        {
            await db.collection("Gallery").findOneAndUpdate({ Theme: req.body.theme }, { $push: { Photo: req.body.url } })
                .then((details) => {
                    res.json(details)
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else
        {
            let link=req.body.url;
            await db.collection("Gallery").insertOne({Theme: req.body.theme,Photo:[link]})
        }
    })
})
app.post('/showgallery',async(req,res)=>
{
    await db.collection("Gallery").find().toArray()
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>
    {
        console.log(e);
    })
})

// ***************************************Register*****************************************//
app.post('/register/:name/:gmail/:phone/:branch/:sec/:reg',async(req,res)=>
{
    await db.collection("RegisterData").insertOne(
        {
            Name:req.params.name,
            Gmail:req.params.gmail,
            Phonenumber:req.params.phone,
            Branch:req.params.branch,
            Section:req.params.sec,
            Registernumber:req.params.reg,
        })
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log('server Running at port 8000')
    })
}
)