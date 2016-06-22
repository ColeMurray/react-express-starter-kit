import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(express.static(__dirname + '/../../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = app.listen(3000, function () {
    console.log('Express listening on port 3000');
});
