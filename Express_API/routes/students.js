var express = require("express");
const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../Controllers/studentController");
var router = express.Router();
/* GET students listing. */
router.get("/", getStudents);
router.post("/addStudent", addStudent);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);
module.exports = router;