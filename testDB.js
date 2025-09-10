const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sql@9822173805",  // apna password check karo
  database: "Himanshuchallenge" // ensure ye DB exist karta ho
});

db.query("SELECT * FROM stores", (err, results) => {
  if (err) {
    console.error("DB connection error:", err.message);
    return;
  }
  console.log("Stores from DB:", results);
  process.exit(); // script finish
});
