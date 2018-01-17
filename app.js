const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// bodyParser stuffs
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// routes
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)


// start the server and listen
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})