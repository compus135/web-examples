import { studentList } from "./data";

const fetchStudent = (id) => {
  const student = studentList.find((student) => student.id === id);
  return Promise.resolve(student);
};

const slowlyFetchStudent = (id) => {
  const student = studentList.find((student) => student.id === id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(student);
    }, 3000);
  });
};

export { fetchStudent, slowlyFetchStudent };
