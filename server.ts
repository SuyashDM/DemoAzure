const express = require('express');
const app = express();

app.set('view engine', 'ejs');


const port = 5000;

app.get('/',(req: any ,res: any)=>{
    res.send("hello world")
}
   

)

app.listen(port,()=>{
    console.log("Server is started");
})