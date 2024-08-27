import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const schoolRouter = express.Router();


schoolRouter.post('/addSchool',async(req,res)=>{
    const {name,address,latitude,longitude }=req.body
    console.log(name,address,latitude,longitude )
    if(!name || !address || typeof latitude != 'number' || typeof longitude  != 'number'){
        return res.status(400).json({error:'All fields are required/Invalid data type'})
    }

    const school=await prisma.school.create({
        data:{
            name,
            address,
            latitude,
            longitude 
        }
    })

    res.status(201).json(
        {
            message:'School added successfully',
            school
        }
    )
})

schoolRouter.get('/getSchools',async(req,res)=>{
    const schools=await prisma.school.findMany()
    res.status(200).json(schools)
})

schoolRouter.get('/listSchools',async(req,res)=>{
    const {latitude,longitude}=req.query

    if(!latitude || !longitude){
        return res.status(400).json({error:'Latitude and Longitude are required'})
    }

    const latFloat=parseFloat(latitude)
    const longFloat=parseFloat(longitude)

    const schools=await prisma.school.findMany()

    const distances=schools.map(school=>{
        const distance=getDistance(latFloat,longFloat,school.latitude,school.longitude)
        return {...school,distance}
    })
    
    const sorted=distances.sort((a,b)=>a.distance-b.distance)


    res.status(200).json(sorted)
})

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1); // Difference in latitude
    const dLon = deg2rad(lon2 - lon1); // Difference in longitude
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

export  {schoolRouter};