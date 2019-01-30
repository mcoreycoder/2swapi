import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import planets from "./routes/planets.route"

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send( "I am here")
});

app.use("/planets", planets)





app.listen(port, () => {
    console.log("Served", port)
});
