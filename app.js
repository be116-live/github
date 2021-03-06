let createError  = require('http-errors');
let express      = require('express');
let path         = require('path');
let cookieParser = require('cookie-parser');
let logger       = require('morgan');
let bodyParser   = require('body-parser');

// ルーター
let deployment = require('./routes/deployment');


let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', deployment);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "Page is not found.", { expose: true }));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
