import { Student } from './student.interfase';
import { StudentModel } from './student.schema';

const saveStudentDataOnDatabase = async (studentInfo: Student) => {
  const result = await StudentModel.create(studentInfo);
  return result;
};

export const studentServices = {
  saveStudentDataOnDatabase,
};
