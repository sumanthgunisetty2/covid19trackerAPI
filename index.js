const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const bcrypt = require('bcrypt')

const app = new express();
app.use(express.json());



app.use(cors());

const client = new MongoClient('mongodb+srv://admin1:admin1@cluster0.fpvbr3g.mongodb.net/?retryWrites=true&w=majority');
                               // mongodb+srv://admin1:admin1@cluster0.fpvbr3g.mongodb.net/?retryWrites=true&w=majority
client.connect();

const db = client.db("skill")
const col = db.collection("user")
const col2 = db.collection("covid")


app.get('/home', (req, res) => {
    res.send("It is a Home Page - New Page - New 2 Page")
})

app.post('/insert', async(req, res) => {

    req.body.password =await bcrypt.hash(req.body.password,5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})

app.post('/check', async(req,res) => {
    console.log(req.body)
    var result = await col.findOne({"name":req.body.un})
    if(result !== null){
        if(await bcrypt.compare(req.body.pw, result.password)){
            res.send(result);
        }
        else{
            res.send("fail");
        }
    }
    else{
        res.send("fail");
    }
})

app.get('/show', async(req,res) => {
    var result = await col.find().toArray();
    console.log(result);
    res.send(result);
})

app.post('/cases', (req,res) => {
    console.log(req.body);
    col2.insertOne(req.body);
    res.send("Successfully Inserted");
})

app.put('/cases',async (req,res) => {
    console.log(req.body);
    var doc = {
        $set: {
            cno:req.body.cno,
            country:req.body.country,
            domain:req.body.domain,
        }
    }
    await col2.updateOne({pname: req.body.pname}, doc)
    res.send("Updated Successfully")
})

app.get('/display', async(req, res) => {
    var result = await col2.find().toArray();
    res.send(result);
})

app.delete('/delete', async(req,res) => {
    console.log(req.query);
    await col2.deleteOne({pname:req.query.name});
    res.send("deleted");
})


app.listen(8081);
console.log("Server Running");