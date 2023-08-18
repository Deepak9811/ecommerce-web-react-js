var express = require("express");
const productCollection = require("../controller/Product.controller");
var router = express.Router();

router.post("/uploadProduct", function (req, res, next) {
  productCollection.productAdd(req, res);
});

router.get("/products", function (req, res, next) {
  productCollection.getProducts(req, res);
});

module.exports = router;
