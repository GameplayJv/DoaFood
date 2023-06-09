const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "bdalimentos",
  port: "3307",
});


//DELETE
app.delete("/alimento/:id", (req, res) =>{
  const { id } = req.params;
  console.log("Informação: ", id)

  let SQL = "DELETE FROM listaalimentos WHERE (`id` = ? )";

  db.query(SQL, id, (err, result) => {
    console.log(err);
  })
})
  

//READ
app.get("/alimentos", (req, res) => {
    let SQL = "SELECT * from listaalimentos";
  
    db.query(SQL, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  });
  
//CREATE
  app.post("/alimento", (req, res) => {
    const { alimento } = req.body;
  
    let SQL = "INSERT INTO listaalimentos (alimentos) VALUES (?)";
  
    db.query(SQL, [alimento], (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });
  

app.get("/", (req, res) => {

    let SQL = "INSERT INTO listaalimentos ( alimentos ) VALUES ('Adcionar comida')";

    db.query(SQL, (err, result) => {
        console.log(err);
    })
})

app.listen(3306, () => {
    console.log("rodando servidor");
});