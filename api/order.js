import Orders from '../models/order';
import { Router } from 'express';

let order = Router();

order.post('/', function(req, res, next){

    let order = new Orders({
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

order.get('/', function (req, res, next) {
    Orders.find(function (err, data) {
        if (err){
            console.log(err);
        }
        else {
            res.send(data);
        }
    })
});

export default order;
