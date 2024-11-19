import { Schema, model } from 'mongoose';
import { Parent, Student } from './student.interfase';
import validator from 'validator';

// Parent Schema
const parentSchema = new Schema<Parent>({
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  fatherPhoneNumber: { type: String, required: true },
});

// Student Schema
const studentSchema = new Schema<Student>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value: string): boolean => validator.isAlpha(value),
        message: '{VALUE} is not Capitalized !!',
      },
    },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    role: { type: Number, required: true, unique: true },
    parentInfo: { type: parentSchema, required: true },
    bloodGroup: {
      type: String, // Specify the type explicitly
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      required: true,
    },
    accountStatus: {
      type: String, // Specify the type explicitly
      enum: ['active', 'disabled'],
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
  },
  { strict: true }, // Enforces the schema structure strictly
);

// Create a model
export const StudentModel = model<Student>('Student', studentSchema);

// custom validation
// name: {
//   type: String,
//   required: true,
//   trim: true,
//   validate: {
//     validator: function (value: string): boolean {
//       // Example validation: Ensure the name starts with a capital letter
//       const regex = /^[A-Z]/;
//       return regex.test(value);
//     },
//     message: "{VALUE is not capitalized.}"
//   }
// },

// using validator validation
/**
 * name: {
      type: String,
      required: true,
      trim: true,
     validate:{
      validator: (value:string):boolean=> validator.isAlpha(value),
      message:"{VALUE} is not Capitalized !!"
     }
    },
 * 
 */
