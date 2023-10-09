const Joi = require("joi");
const studentService = require("../Services/studentServices");

const studentSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
});
module.exports = {
  getStudents: (req, res) => {
    const data = studentService.getStudents(req.body);
    res.send(data);
  },

  updateStudent: (req, res) => {
    const data = studentService.updateStudent(req.params.id, req.body);
    res.send(data);
  },
  deleteStudent: (req, res) => {
    const data = studentService.deleteStudent(req.params.id);
    res.send(data);
  },
  addStudent: (req, res) => {
    try {
      
      const validate = studentService.addStudent(req.body);
      
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = studentService.addStudent(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};