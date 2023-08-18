exports.successResponse = (res, data) => {
  res.status(200).send({ response: "ok", data: data });
};

exports.errorResponse = (res, err) => {
  res
    .status(err.status)
    .send({ response: "error", data: null, errorMessage: err.msg });
};
