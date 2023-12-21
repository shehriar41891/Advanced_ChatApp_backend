const express = require('express')
const { connection } = require('mongoose')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors)

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password  : 'Asimali@0129',
    database : 'advanced_chatapp'
})

db.getConnection((err,connection)=>{
    if(err){
        console.log('There is an error in connecting to the Database',err.message)
    }
    else{
        console.log('Connected to the Database')
        connection.release()
    }
})

app.post('/submitform',(req,res)=>{
  console.log('The route is hit by frontend')
})

app.listen(3000,()=>{
    console.log('The server is running at the port 3000')
})