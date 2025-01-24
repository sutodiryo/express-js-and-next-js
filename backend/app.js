import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import middlewareLogRequest from "./src/middleware/log.js";
import userRoutes from "./src/routes/users.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// const middlewareLogRequest = require('./src/middleware/log');

// const userRoutes = require('./src/routes/users.js');

// app.method(path, handler);

// app.use("/", (req, res, next) => {
//     res.send('Use');
// });

app.use(middlewareLogRequest);

app.use('/user', userRoutes);

app.get("/", (req, res, next) => {
    // res.send('<h1>Get</h1>'); // example html
    res.json({
        name: "xaxa",
        age: 30
    });
});
                
app.post("/", (req, res) => {
    res.send('Post')
});

app.listen(process.env.APP_PORT, () => {
    console.log('server is running')
});