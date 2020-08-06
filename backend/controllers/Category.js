const Category = require("../models/category.js");

exports.createCategory = (req,res)=> {
    Category.create(req.body).then((category) => {
        res.json(category.name + ' created category')
    }).catch((err)=>{
        res.send("error: " + err)
    })
}

exports.findCategories = (req,res) => {
    Category.find({},(err,result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
}

