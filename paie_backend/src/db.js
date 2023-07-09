import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://paie_cell:Paiecell1234@cluster0.fxw0va7.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("crudapp");
    cb();
}

export {db,connectToDB};