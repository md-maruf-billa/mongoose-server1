// parent type

export type Parent = {
  fatherName: string;
  motherName: string;
  fatherPhoneNumber: string;
};

export type Student = {
  name: string;
  email: string;
  role: number;
  parentInfo: Parent;
  phoneNumber: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  accountStatus: 'active' | 'disabled';
  gender: 'Male' | 'Female' | 'Other';
};
