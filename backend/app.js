const express = require("express");
//const cors = require('cors');

const dotenv = require("dotenv");
const path = require("path");

const connectDatabase = require("./config/connectDatabase");
const products = require("./routes/product");
const orders = require("./routes/order");
const app = express();
dotenv.config({ path: path.join(__dirname, "config", "config.env") });


connectDatabase();

/*app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
}));*/
app.use(express.json());

app.use("/api/v1/", products);
app.use("/api/v1/", orders);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '..', 'frontend',  'build')));
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'))
  });
}
const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
