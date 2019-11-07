import Mock from "mockjs"

let data =require("./list.json")
Mock.mock("/api",{
     values:data
})