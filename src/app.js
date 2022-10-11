const express =require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser=require("body-parser")
const routes = require("./routes/main");
const Detail = require("./models/Details");
const Slider = require("./models/Slider");
const Service = require("./models/Service");



// /static/css/style.css 
// app.use(express.static(path.join(__dirname, “/views”))); leave it 
app.use("/static",express.static("public"));
app.use("",routes) 

//template engine 
app.set("view engine","hbs");
app.set("views","views");
hbs.registerPartials("views/partials")

// db connection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected")

    // Service.create([
    //     {
    //         icon:"fa-accusoft",
    //         title:"Provide Best Courses",
    //         description:"We provide courses that helps our student in learning and in placement", 
    //         linkText:"www.learncodewithdurgesh.com",
    //         link:"check",
    //     },
    //     {
    //         icon:"fab fa-affiliatetheme",
    //         title:"Learn Project",
    //         description:"We provide courses that helps our student in learning and in placement", 
    //         linkText:"www.learncodewithdurgesh.com",
    //         link:"Learn",
    //     },
    //     {
    //         icon:"fab fa-affiliatetheme",
    //         title:"Learn Project",
    //         description:"We provide courses that helps our student in learning and in placement", 
    //         linkText:"www.learncodewithdurgesh.com",
    //         link:"Learn",
    //     }
   
    // ])

    // Slider.create([
    //     {
    //         title:"Learn Javascript  one ",
    //         subTitle:"Java is best language one  ",
    //         imageUrl:"/static/images/one.jpg"
    //     },
    //     {
    //         title:"Learn Javascript two   ",
    //         subTitle:"Java is best l anguage  two ",
    //         imageUrl:"/static/images/two.jpg"
    //     },
    //     {
    //         title:"Learn Javascript three ",
    //         subTitle:"Java is best language  three ",
    //         imageUrl:"/static/images/three.jpg"
    //     }
    // ])
    
})
//    


app.listen(process.env.PORT | 5556, ()=>{
    console.log("Server Started");
});

