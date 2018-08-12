const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
	res.status(200).json({
		msg: 'here dem orders'
	});
})

router.post('/', (req, res, next) =>{
	const orderObj = {
		productId: req.body.productId,
		quantity: req.body.quantity
	}
	res.status(201).json({
		msg: 'orders put in here',
		order: orderObj
	});
})

router.get('/:orderId', (req, res, next) =>{
	const orderid = req.params.orderId
	res.status(201).json({
		msg: 'NOW THATS MY BOOTYHOLE for order bitttttttt',
		id: orderid
	});
})


module.exports = router;