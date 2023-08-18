const UserSchema = require("../Model/User.model");
const ResponseObj = require("../service/Response.service");

// const findUser = async (req, res) => {
//   const { email } = req.body;
//   try {
//     let findUser = await UserSchema.findOne({ email: email });
//     if (findUser) {
//       return ResponseObj.successResponse(res, {
//         email: findUser.email,
//         msg: "Email Id already register.",
//       });
//     }
//   } catch (error) {
//     return ResponseObj.errorResponse(res, {
//       status: 400,
//       msg: error.message,
//     });
//   }
// };

// SignUp
exports.userRegister = async (req, res) => {
  const { email } = req.body;
  try {
    let findUser = await UserSchema.findOne({ email: email });
    if (findUser) {
      return res.status(200).send({ response: "Email Id already register" });
    }
  } catch (error) {
    return ResponseObj.errorResponse(res, {
      status: 400,
      msg: error.message,
    });
  }

  let registerObj = new UserSchema(req.body);
  registerObj
    .save()
    .then((userData) => {
      ResponseObj.successResponse(res, userData);
    })
    .catch((error) => {
      console.log("error :============> 2975914946 ", error);

      // if (error) {
      //   let errorKeysArray = Object.keys(error.errors);
      //   let msgArray = errorKeysArray.map((obj) => {
      //     return error.errors[obj];
      //   });

      //   ResponseObj.errorResponse(res, {
      //     status: 400,
      //     msg: msgArray.join(", "),
      //   });
      // }

      ResponseObj.errorResponse(res, {
        status: 400,
        msg: error.message,
      });
    });
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  await UserSchema.findOne({
    email: email,
    // $and: [{ password: req.body.password }],
  })
    .then((resp) => {
      console.log("response :->   ", resp);
      if (resp) {
        const dataSend = {
          _id: resp._id,
          firstName: resp.firstName,
          lastName: resp.lastName,
          email: resp.email,
          image: resp.image,
        };

        ResponseObj.successResponse(res, dataSend);
      } else {
        res.status(200).send({ response: "error", message: "no user found" });
      }
    })
    .catch((error) => {
      ResponseObj.errorResponse(res, {
        status: 400,
        msg: error.message,
      });
    });
};
