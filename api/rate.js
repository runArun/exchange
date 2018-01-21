import { Router } from 'express';
import request from 'request';

let rate = Router();

const url = 'https://api.fixer.io/latest?base=AUD';

rate.get('/', function(req, res, next){

    let options =
        {
            url: url,
            Accept: "application/json",
            "Accept-Charset": "uf-8"
        };

    let outerResponse = res;

    request( options, function (err, res, body) {

        if (err) 
        {
            console.log(err);
        } 

        else if (res.statusCode !== 200) 
        {
            console.log("Unexpected status code: " + res.statusCode);
        } 

        else 
        {
            let data = JSON.parse(body);
            outerResponse.json(data);
        }
    })
})

export default rate;
