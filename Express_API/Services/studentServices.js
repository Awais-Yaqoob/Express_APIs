const Students = [
    { id: 1, name: "Awais" },
    { id: 2, name: "Arslan" },
    { id: 3, name: "Ahmed" },
  ];
  
  module.exports = {
    getCourses: (data) => {
      return Students;
    },
    updateCourse: (data) => {
      const student = Students.find((c) => c.id === parseInt(data.id));
      if (!student) {
        return "The Student with the given ID was not found."; //404
      } else {
        student.name = data.name;
        return student;
      }
    },
    deleteCourse: (data) => {
      const student = Students.find((c) => c.id === parseInt(data.id));
      if (!student) {
        return "The Student with the given ID was not found."; //404
      } else {
        const index = Students.indexOf(student);
        Students.splice(index, 1);
        return student;
      }
    },
    addCourse: (data) => {
      const students = {
        id: Students.length + 1,
        name: data.name,
      };
      Students.push(students);
      return students;
    },
  };