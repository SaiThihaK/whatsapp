const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const {OAuth2Client} = require('google-auth-library'); 

const client = new OAuth2Client('1011467732405-ug4pbug008tbsqb6hpl1cfdd7rehttgj.apps.googleusercontent.com');


 
app.post('/api/google-login',async(req,res)=>{
const ticket = await client.verifyIdToken({
        idToken: req.body.token,
    })

    res.status(200).json(ticket.getPayload())
})

app.listen(4000,()=>{
    console.log('server is running at port'+4000);

})
