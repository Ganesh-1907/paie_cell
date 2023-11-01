import cors from "cors";
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express()
app.use(express.json())
app.use(cors())

// *************************************************Admin*********************************************//
app.post('/paieadmin/:mail/:pass',async(req,res)=>
{
    await db.collection("Admin").insertOne({Gmail:req.params.mail,Password:req.params.pass})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
app.post('/aollink',async(req,res)=>
{
    await db.collection("Admin").findOneAndUpdate({Gmail:req.body.adminmail},{$set:{YesLink:req.body.aollink}})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
app.post('/sslink',async(req,res)=>
{
    await db.collection("Admin").findOneAndUpdate({Gmail:req.body.adminmail},{$set:{photoLink:req.body.sslink}})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
app.post('/updtpswd',async(req,res)=>
{
    await db.collection("Admin").findOneAndUpdate({Gmail:req.body.adminmail},{$set:{UpdatepasswordLink:req.body.sslink}})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
app.post('/verifyadmin/:mail',async(req,res)=>
{
    await db.collection("Admin").findOne({Gmail:req.params.mail})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
// *************************************************Flash news****************************************//
app.post('/flashnews/:flash',async(req,res)=>{
    const details=await db.collection("Flashnews").deleteMany() && await db.collection("Flashnews").insertOne({flash:req.params.flash});
    res.json(details)
})

app.post('/flashnews',async(req,res)=>{
    const details=await db.collection("Flashnews").find().toArray()
    res.json(details);
})


// ******************************************************Events************************************************//
app.post('/admin-event/:day/:month/:year/:event/:details',async(req,res)=>{
    const details=await db.collection("Events").insertOne({
        day:req.params.day,
        month : req.params.month,
        year : req.params.year,
        event:req.params.event,
        details:req.params.details
       });
    res.json(details)
})

app.post('/events/',async(req,res)=>
{
    const details=await db.collection("Events").find().toArray()
    res.json(details);
})
app.post('/delete-event/:event',async(req,res)=>
{
    await db.collection("Events").deleteOne({event:req.params.event})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e));
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
            await db.collection("Gallery").findOneAndUpdate({ Theme: req.body.theme }, { $push: { Photo:{Name:req.body.name,Link:req.body.url}} })
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
            let name=req.body.name
            await db.collection("Gallery").insertOne({Theme: req.body.theme,Photo:[{Name:name,Link:link}]})
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
app.post('/deletegalleryphoto',async(req,res)=>
{
    await db.collection("Gallery").findOneAndUpdate({Theme:req.body.file.val.Theme},{$pull:{Photo:req.body.file.val1}})
    .then((details)=>
    {
        res.json(details);
    })
    .catch((e)=>console.log(e))
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
app.post('/uploadscrnsrt',async(req,res)=>
{
    await db.collection("RegisterData").findOneAndUpdate({Gmail:req.body.mail},{$set:{Request:true,ScreenShort:req.body.url}})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e));
})
app.post('/verify/:mail',async(req,res)=>
{
    await db.collection("RegisterData").findOne({Gmail:req.params.mail})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e));
})
app.post('/registerdata',async(req,res)=>
{
    await db.collection("RegisterData").find().toArray()
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e));
})
app.post('/cnfrmregt/:mail',async(req,res)=>
{
    await db.collection("RegisterData").findOneAndUpdate({Gmail:req.params.mail},{$set:{Confirm:true}})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
app.post('/rmvrgtr/:mail',async(req,res)=>
{
    await db.collection("RegisterData").findOneAndUpdate({Gmail:req.params.mail},{$set:{Request:false,Confirm:false}})
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
app.post('/updatepassword/:mail/:pass',async(req,res)=>
{
    await db.collection("RegisterData").findOne({Gmail:req.params.mail})
    .then(async(details)=>
    {
        if(details.Confirm)
        {
            await db.collection("RegisterData").findOneAndUpdate({ Gmail: req.params.mail }, { $set: { Password: req.params.pass } })
                .then((details1) => {
                    res.json(details1)
                })
                .catch((e) => console.log(e))
        }
        else
        {
           res.json(details)
        }
    })
    .catch((e)=>console.log(e))
})
app.post('/finilizelis/:name',async(req,res)=>
{
    await db.collection("RegisterData").find({Confirm:true}).toArray()
    .then((details)=>
    {
        if(details)
        {
            details.forEach(element =>
            {
                 db.collection("FinalList").findOne({ Date: req.params.name })
                    .then(async (details1) =>
                    {
                        if (details1)
                        {
                            await db.collection("FinalList").findOne({List:element})
                            .then((details2)=>
                            {
                                if(!details2)
                                {
                                    db.collection("FinalList").findOneAndUpdate({ Date: req.params.name }, { $push: { List: element } })
                                    .then((details) => {
                                        res.json(details)
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                                }
                                else
                                {
                                    res.json(details)
                                }
                            })
                        }
                        else {
                            await db.collection("FinalList").insertOne({ Date: req.params.name, List: [element] })
                        }
                    })
            });
            }
    })
})  
app.post('/finilizelist/:ok',async(req,res)=>
{
    await db.collection("FinalList").find().toArray()
    .then((details)=>
    {
        console.log("Hello")
        
        details.map((val)=>
        (
            
                val.List.map((val2)=>
                {console.log(details.Date)
                    console.log(val2)
                })
        ))
    })
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log('server Running at port 8000')
    })
}
)