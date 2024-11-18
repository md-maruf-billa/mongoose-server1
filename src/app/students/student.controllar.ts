import { Request, Response } from 'express';
import { studentServices } from './student.servecis';

const createStudentAccount = async (req: Request, res: Response) => {
  try {
    const { studentInfo } = req.body;
    const result = await studentServices.saveStudentDataOnDatabase(studentInfo);

    res.status(200).json({
      success: true,
      massage: 'Data successfully saved',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      massage: 'Internal server error' + err,
    });
  }
};

export const studentController = {
  createStudentAccount,
};
