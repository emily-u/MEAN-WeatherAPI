// ========== CONFIG =============
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist' ));
// ===============================
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./client/dist/index.html"))
});
// ==== SERVER LISTENER! =======
app.listen(8000, function(){
    console.log("Express on port 8000!")
});
// =============================


