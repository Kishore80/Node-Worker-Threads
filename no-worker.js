import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send("This is Non Blocking")
})

app.get('/slow-page',(req,res)=>{
    let i = 0 ;
    for (let index = 0; index < 6000000000000; index++) {
            i+=1
    }
    res.send(`This is Blocking and it's data is ${i}`)
})

app.listen(3000,()=>{
    console.log(`Express Server Started`)
})