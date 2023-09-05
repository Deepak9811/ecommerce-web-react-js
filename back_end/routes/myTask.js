var express = require("express");
const task = require("../controller/MyTask.controller");
var router = express.Router();

// router.get("/task", function (req, res, next) {
//     task.taskDataAdd(req, res);
// });

router.post("/task", (req, res, next) => {
  task.taskDataAdd(req, res);
});

module.exports = router;
