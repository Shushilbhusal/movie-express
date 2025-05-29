import mysql2 from "mysql2/promise";

export const pool = mysql2.createPool({
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "movies",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});