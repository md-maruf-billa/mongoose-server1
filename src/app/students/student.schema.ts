import { Schema, model } from 'mongoose';
import { Parent, Student } from './student.interfase';

// parent schema
const parentSchema = new Schema<Parent>({
  fatherName: { type: String, required: true },
  motherName: { type: String, require: true },
  fatherPhoneNumber: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role: { type: Number, required: true },
  parentInfo: parentSchema,
});

// now create a model

export const StudentModel = model<Student>('student', studentSchema);
