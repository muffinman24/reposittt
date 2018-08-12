const express = require('express');

const app = express();

const morgan = require('morgan')
const bodyParser = require('body-parser')

const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');

	if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
		return res.status(200).json({})
	}

	next();
})


app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found hoe');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;