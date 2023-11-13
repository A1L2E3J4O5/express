const express = require ('express');
const app = express();
const port = 8000;

app.get("/users",(req,res)=>
{
    res.send('users list');
})

app.post('/bookings',express.json(),(req,res)=>
{
    const data = req.body;
    if (isDataValid(data))
    {
        const newBoking = db.insert('boking',data);
        res.json(newBoking);
    }
    else
    {
        res.status(400).send("invalid data");
    }
})


app.listen(port,()=>
{
    console.log("run a port: ", port);
})
