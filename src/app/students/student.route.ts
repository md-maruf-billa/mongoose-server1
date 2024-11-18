import express from 'express';
import { studentController } from './student.controllar';

const studentRoute = express.Router();

studentRoute.post(
  '/create-student-account',
  studentController.createStudentAccount,
);

export default studentRoute;
