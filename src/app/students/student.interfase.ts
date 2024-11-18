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
};
