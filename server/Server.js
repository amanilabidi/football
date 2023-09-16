const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');


//use cors
app.use(cors());
app.use(express.json());

//create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "foot"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data)
    })
});
app.post("/create", (req, res) => {
    const sql = "INSERT INTO login (`email`, `password`) VALUES (?)";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json(data);
    });

});
//connect to server
app.listen(5500, () => {
    console.log("server connected")
}
);