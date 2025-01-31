import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use("/Public", express.static(path.join(__dirname, "public")));

// views engine

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// Home Page Route

app.get("/", async (req, res) => {
  res.render("index");
});

// Cart Page Route

app.get("/cart", async(req,res)=> {
  res.render("cart.ejs");
});

// checkout Page Route

app.get("/checkout", async(req,res)=> {
  res.render("checkout.ejs");
});

// Dashboard Page Route

app.get("/dashboard", async(req, res)=> {
  res.render("dashboard.ejs");
});

// Orders Page Route

app.get("/orders", async(req, res) => {
  res.render("orders.ejs");
});

// Login Page Route

app.get("/login", async (req, res) => {
  res.render("login.ejs");
});

// Sign-Up Page Route
app.get("/signup", async (req, res) => {
  res.render("signup.ejs");
});

// About Us Page Route

app.get("/about", async (req, res) => {
  res.render("about.ejs");
});

// Products Page Route

app.get("/products", async (req, res) => {
  res.render("products.ejs");
});

// Support Page Route

app.get("/support", async (req, res) => {
  res.render("support.ejs");
});

// Services Page Route

app.get("/services", async (req, res) => {
  res.render("services.ejs");
});

// Home Page Route

app.get("/home", async (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
