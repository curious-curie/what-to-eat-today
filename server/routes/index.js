
const axios = require('axios');
const express = require('express');
const request = require('request');
var cors = require('cors')
const router = express.Router();

require('dotenv').config();
const id = process.env['CLIENT_ID'];
const secret = process.env['CLIENT_SECRET'];
router.use(cors());

router.get('/', (req, res) => res.json({data: "index"}));

router.get('/search/', (req, res) =>
{
        // let searchWord = encodeURIComponent(req.query.query);
        let searchWord = req.query.query;
        let places
        let url = 'https://openapi.naver.com/v1/search/local?sort=comment&query=' + encodeURI(req.query.query);
        let headers =  {
        'X-Naver-Client-Id': id,
        'X-Naver-Client-Secret': secret,
        "Access-Control-Allow-Origin": "*",
        };

        let options = {
            url: url,
            headers: headers
        }
    
        request.get(options, function(error, response, body){
            if (!error && response.statusCode == 200) {
                res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
                res.end(body);
              } else {
                res.status(response.statusCode).end();
                console.log(response)
                console.log('error = ' + response.statusCode);}
        });

})
module.exports = router

