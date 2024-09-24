import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "myblog"
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     console.log("Connected to the database");
//   }
// });

