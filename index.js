const express = require("express");
const searchRoutes = require("./routes/search-routes");
const authRoutes = require("./routes/auth-routes");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
app.use(searchRoutes);
app.use(authRoutes);

app.listen(5000, () => console.log(`listening on port 5000`));
