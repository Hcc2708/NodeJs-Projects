const express = require("express")
const path = require('path')
const app = express()
const router = express.Router()

const arr = [
    {
        "name":"hemchand",
        "age":23,
        "stream": "B tech"
    },
    {
        "name":"Rajkishor",
        "age":25,
        "stream":"B pharma"
    },
    {
        "name":"Friend",
        "age":23,
        "stream":"XYZ"
    }
]
router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../views/Login.html'))
    res.render('home')

})
router.get('/blogpage', (req, res)=>{
    // mycontent = arr.map((e)=> e.name + "Chandravanshi"
    // )
    // console.log(mycontent);
    // var filteredContent = arr.filter(e=>e.age == req.params.slug)
    // // res.send(filteredContent)
    // console.log(filteredContent);
    res.render('blogpage', {
        title: arr[0].name, 
        content: arr[0].stream
    })
})
module.exports = router