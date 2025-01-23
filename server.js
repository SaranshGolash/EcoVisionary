import express from "express";
import axios from "axios";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/Public', express.static(path.join(__dirname, 'Public')));

// Home Page Route

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

// Login Page Route

app.get("/login", async (req, res) => {
    res.render("login.ejs");
});

// Sign-Up Page Route

app.get("/signUp", async(req, res) => {
    res.render("signup.ejs");
});

// About Us Page Route

app.get("/about", async(req, res) => {
    res.render("about.ejs");
});

// Products Page Route

app.get("/products", async(req, res) => {
    res.render("products.ejs");
})

// Support Page Route

app.get("/support", async (req, res) => {
    res.render("support.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});