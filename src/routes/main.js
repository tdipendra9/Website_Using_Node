const express = require('express')
const {route}=require('express/lib/application')

const Detail = require("../models/Details")
const Slider = require('../models/Slider')
const Service=require("../models/Service")
const Contact=require("../models/Contact")
const { response } = require('express')
const routes=express.Router()

routes.get("/", async (req,res)=>{
const details= await  Detail.find({"_id":"6336abaea61b3ba5ff140643"});
const slides = await Slider.find();
const services = await Service.find();
// console.log(slides)
// console.log(services)
    res.render("index",{
        details:details,
        slides:slides,
        services:services ,
    })
})

routes.get("/gallery",async (req,res)=>{ 
    const details= await  Detail.find({"_id":"6336abaea61b3ba5ff140643"})
    // console.log(details)
     res.render("gallery" ,{details:details})  
})

    // process contact form 
routes.post("/process-contact-form",async (request,response)=>{
    console.log("form is submitted")
    console.log(request.body)

    //save data to db 
    try{
        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/") 

    }catch(e){
        console.log(e)
        response.redirect("/")
    }
})
module.exports=routes 