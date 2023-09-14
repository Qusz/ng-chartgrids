export type Customer = {
  id: string;
  name: string;
  phoneNumber: string;
  registeredDate: string | number;
  pointOfRegistration: string;
  sex?: string | null;
  birthDate?: string | null;
  location?: string | null;
  email?: string | null;
  jobTitle?: string | null;
  jobType?: string | null;
};
