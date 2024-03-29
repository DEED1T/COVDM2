const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const morgan = require('morgan');
const bodyparser = require('body-parser');

const connectDB = require('./server/database/connection')
const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3000;

//log requests
app.use(morgan('tiny'));

//DB connection
//connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs");
/* app.set("views",path.resolve(__dirname, ))*/

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/json", express.static(path.resolve(__dirname, "assets/json")));


//load routers
app.use('/', require('./server/routes/router'));


app.listen(PORT, () => {
    console.log(`Serveur démarré sur l'adresse http://localhost:${PORT}/`);
});
