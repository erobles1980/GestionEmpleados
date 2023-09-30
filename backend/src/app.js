const express=require('express');
const cors=require('cors')
const morgan=require('morgan');
const bodyParser = require('body-parser');
const app=express();
//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
//app.use(morgan('dev'));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 
app.use(cors({origin: 'http://localhost:4200'})); 


//routes
app.use('/api/empleados',require('./routes/empleados.routes'));

module.exports=app;
