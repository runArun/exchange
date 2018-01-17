import { Router } from 'express';
import request from 'request';

let rate = Router();

rate.get('/', function(req, res, next){

    var result = request
        .get('https://api.fixer.io/latest?base=AUD')
    console.log(result);
    res.json(result);

})

export default rate;