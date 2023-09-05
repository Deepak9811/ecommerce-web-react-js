const MyTask = require("../Model/MyTask.model");
const ResponseObj = require("../service/Response.service");

exports.taskDataAdd = async (req, res) => {
  let registerObj = new MyTask(req.body);

  registerObj
    .save()
    .then((resp) => {
      const dataSend = {
        _id: resp._id,
        email: resp.email,
        number: resp.number,
      };
      ResponseObj.successResponse(res, dataSend);
    })
    .catch((error) => {
      console.log("error :============> 2975914946 ", error);
      ResponseObj.errorResponse(res, {
        status: 400,
        msg: error.message,
      });
    });
};
