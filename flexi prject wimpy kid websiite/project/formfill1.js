const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./user');
const nodemailer= require('nodemailer');
const Contact = require('./contactus')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/WimpyKid').then(()=> {}).catch(()=>{})


const app = express();
app.use(express.json())
app.use(cors())
app.use(require("cors")());
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/register', async (req, res) => {
   

    console.log(req.body)
    res.json({status: 'ok'})
})

app.post('/api/login', async (req, res) => {
  

    console.log(req.body)
    res.json({status: 'ok'})
})




// Handle form submissions
app.post('/api/contactus', async (req, res) => {
    console.log(req.body)
    res.json({status: 'ok'})
    const { name, email, subject, message } = req.body;
  
    // Create a Nodemailer transporter to send emails (configure this accordingly)
    const transporter = nodemailer.createTransport({
      service: 'YourEmailService', // e.g., Gmail, Yahoo, etc.
      auth: {
        user: 'your@email.com',
        pass: 'your-password',
      },
    });
  
    
  });

app.listen(9999, () => {
    console.log('Server up at 9999')
})