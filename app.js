const express = require ('express');
const app = express();
const port = 8000;

app.get("/users",(req,res)=>
{
    res.send('users list');
})

app.post('/bookings',(req,res)=>
{
    res.send('create a new booking')
})


app.listen(port,()=>
{
    console.log("run a port: ", port);
})
