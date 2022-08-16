const express = require('express');
const app = express();
const superagent = require('superagent');
const request = require('request');
const port = 9700;
const cors = require('cors');
app.use(cors());

app.get('/',(req,res) => {
    res.send('<a href="https://github.com/login/oauth/authorize?client_id=108d5a5ff6bc33db09fa">Login With Git</a>')
})

app.get('/profile',(req,res) => {
    const code = req.query.code;
    if(!code){
        res.send('Invalid Login')
    }
    superagent
    .post('https://github.com/login/oauth/access_token')
    .send({
        client_id:'108d5a5ff6bc33db09fa',
        client_secret:'a88ae8e60e16fc70a8ee4e2d46d26c7241b842f3',
        code:code
    })
    .set('Accept', 'application/json')
    .end((err,result) => {
        if(err) throw err;
        let access_token = result.body.access_token
        const option = {
            uri:'https://api.github.com/user',
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Authorization':`token ${access_token}`,
                'User-Agent':'Mycode'
            }
        }
        request(option,(err,response,body) => {
            res.send(body)
        })
    })
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})