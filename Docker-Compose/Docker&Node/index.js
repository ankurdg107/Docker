const express = require("express")
const app = express()
const port  = 5000;

app.get("/",(req,res)=>{


    res.send("<h2>Hi Ankur</h2>");
})

app.listen(port,()=>console.log('listen bc }'))