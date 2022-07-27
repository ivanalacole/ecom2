const express = require('express')
const cors=require('cors')
const app = express();
app.use(cors())

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'ecom-1.cooiwqx4vx5k.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    port: '3306',
    database: 'ibt'

});



connection.connect(function(err){
    if(err){
        return console.log('error: ' + err.message);
    }
    console.log('connected to mysql server')
});

app.get('/products',(req, res) => {
    const query = 'SELECT * FROM ProductsTable'
    connection.query(query, (err, result) =>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})



app.listen(5000, (error) => {
    if(error){ 
        throw error
    }else{console.log('connected to server')}
})