const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// const passport = require('./utils/passport');
// const keys = require('./config/keys');

// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');
// const authRouter = require('./routes/authRouters');
/*{ Error Handling }*/
// const AppError = require('./utils/appError');
// const GlobalErrorHandler = require('./controllers/errorController');

const app = express();

// NOTE: 1) MIDDLEWARES: 'use'
if (process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
}
app.use(express.json());

// NOTE: we require the path built-in Node module and we tell the app to serve the static build of the React app:
app.use(express.static(path.join(__dirname, 'build'))); // to serve static file.
app.use(express.static("public"));


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Use cookie-session
// app.use(cookieSession({
// 	maxAge: 60*1000, //60 sec
// 	keys: [keys.session.cookieKey]
// }));

// app.use(passport.initialize());
// app.use(passport.session());

/*{ NOTE: MOUNTING THE ROUTES }*/
// app.use('/api/v1/tours', tourRouter);
// app.use('/auth', authRouter);
// app.use('/api/v1/users', userRouter);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
