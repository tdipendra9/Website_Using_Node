const mongoose=require("mongoose");
const Detail=mongoose.Schema({
    brandName:String,
    brandIcoUrl:String,
    links:[{
        label:String,
        url:String,
    },
    ],
});

 module.exports = mongoose.model("detail", Detail)