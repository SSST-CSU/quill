// Load the dotfiles.
require('dotenv').load({silent: true});

var express         = require('express');

// Middleware!
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var morgan          = require('morgan');
var path            = require('path');
var fs              = require('fs');
var fsr             = require('file-stream-rotator');
var Sentry          = require('@sentry/node');

var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var database        = process.env.DATABASE || process.env.MONGODB_URI || "mongodb://localhost:27017";
var dsn             = process.env.DSN;

var settingsConfig  = require('./config/settings');
var adminConfig     = require('./config/admin');

var app             = express();

// Connect to mongodb
mongoose.connect(database);

Sentry.init({ dsn });

app.use(Sentry.Handlers.requestHandler());

var logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = fsr.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})

app.use(morgan('combined', {stream: accessLogStream}))

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(methodOverride());

app.use(express.static(__dirname + '/app/client'));

// Routers =====================================================================

var apiRouter = express.Router();
require('./app/server/routes/api')(apiRouter);
app.use('/api', apiRouter);

var authRouter = express.Router();
require('./app/server/routes/auth')(authRouter);
app.use('/auth', authRouter);

require('./app/server/routes')(app);

app.use(Sentry.Handlers.errorHandler());

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
