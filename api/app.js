import express from "express"

const app = express();
console.log("tests")

app.listen(8000,() =>{
    console.log("Server is starting on port 8000")
})