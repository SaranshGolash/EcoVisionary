import express from "express";
import axios from "axios";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/Public', express.static(path.join(__dirname, 'Public')));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});