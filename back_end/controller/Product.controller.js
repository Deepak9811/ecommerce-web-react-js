const ProductSchema = require("../Model/Product.model");
const ResponseObj = require("../service/Response.service");

exports.productAdd = async (req, res) => {
  //   return res.status(200).send({ response: "fill ho gya h " });
  let productObj = new ProductSchema(req.body);

  productObj
    .save()
    .then((data) => {
      ResponseObj.successResponse(res, data);
    })
    .catch((error) => {
      ResponseObj.errorResponse(res, { status: 400, msg: error.message });
    });
};

exports.getProducts = async (req, res) => {
  try {
    const data = await ProductSchema.find();
    console.log("data :===>  ", data.length);

    if (data.length !== 0) {
      ResponseObj.successResponse(res, data);
    } else {
      ResponseObj.errorResponse(res, { status: 200, msg: "no data exist" });
    }
  } catch (error) {
    ResponseObj.errorResponse(res, { status: 400, msg: error });
  }
};
