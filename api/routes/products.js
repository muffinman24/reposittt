const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
	res.status(200).json({
		msg: 'thats a bootyhole'
	});
})

router.post('/', (req, res, next) =>{
	const product = {
		name: req.body.name,
		price: req.body.price
	}
	res.status(201).json({
		msg: 'thats a bootyhole FOR A POST',
		createdProduct: product
	});
})

router.get('/:productId', (req, res, next) =>{
	const id = req.params.productId
	if(id === 'special'){
		res.status(200).json({
			msg: 'NOW THATS MY BOOTYHOLE',
			id: id
		});
	}else{
		res.status(200).json({
			msg: 'YOU PASSED SOME WRONGISH'
		});
	}
})

router.patch('/', (req, res, next) =>{
	res.status(200).json({
		msg: 'patch'
	});
})

router.delete('/', (req, res, next) =>{
	res.status(200).json({
		msg: 'delete'
	});
})

module.exports = router;