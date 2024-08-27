import express from 'express';
import cors from 'cors';
import { schoolRouter } from '../router/schoolRouter.js';
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.use('/api',schoolRouter)

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

