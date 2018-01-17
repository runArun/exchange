import orders from '../models/order';
import { Router } from 'express';

var order = Router();

order.post('/', function(req, res, next){

    let order = new orders({
        username: req.body.username,
        holdC: req.body.holdC,
        wantC: req.body.wantC,
        holdA: req.body.holdA,
        wantA: req.body.wantA
    });

    console.log(order);
    order.save();
    res.sendStatus(200);
});

export default order;
