
const axios = require('axios');
const express = require('express');
const request = require('request');
var cors = require('cors')
const router = express.Router();

router.use(cors());

router.get('/', (req, res) => res.json({data:'this is index.'}));
router.get('/wow/', (req, res) => {
    console.log("wow")
})
router.get('/search/', (req, res) =>
{
        console.log(req.query)
        // let searchWord = encodeURIComponent(req.query.query);
        let searchWord = req.query.query;
        let places
        let url = 'https://openapi.naver.com/v1/search/local?query=' + encodeURI(req.query.query);
        let headers =  {
        'X-Naver-Client-Id':'TLSmE3Saibvfac9WIqZd',
        'X-Naver-Client-Secret': 'rPPCt9ih13',
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