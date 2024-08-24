import express from 'express'
import {Worker} from 'worker_threads'

const app = express()

app.get('/',(req,res)=>{
    res.send("This is Non Blocking")
})

app.get('/slow-page',(req,res)=>{
    const worker = new Worker('./worker-thread.js')
    worker.on('message',(data)=>{
        console.log("Data",data)
        res.send(`This is Blocking and is Handled By Worker Thread ${data}`)
    })
    worker.on('error',(error)=>{
        res.send(`An Unexpected Error Occured`)
    })
})

app.listen(3000,()=>{
    console.log(`Express Server Started`)
})