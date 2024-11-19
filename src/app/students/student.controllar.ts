import { Request, Response } from 'express';
import { studentServices } from './student.servecis';
import studentValidationSchemaJoi from './student.validation.joi';

const createStudentAccount = async (req: Request, res: Response) => {
  try {

    const { studentInfo } = req.body;
    const { error } = studentValidationSchemaJoi.validate(studentInfo);
    if (error) {
      res.status(500).json({
        success: false,
        massage: 'Internal server error',
        error: error.details
      });
    }
    else {
      const result = await studentServices.saveStudentDataOnDatabase(studentInfo);
      res.status(200).json({
        success: true,
        massage: 'Data successfully saved',
        data: result,
      });
    }

  } catch (err: any) {
    res.status(500).json({
      success: false,
      massage: 'Internal server error',
      error: err,
    });
  }
};

export const studentController = {
  createStudentAccount,
};
