import express from "express"
const app = express()

const port = 3000;

app.get("/expressroute", (req, res) => {
    res.send("This is an express rouite!")
})


app.listen(port, () =>{
    console.log("Server is running on port " + port)
} )