export type Customer = {
  id: string;
  name: string;
  phoneNumber: string;
  registeredDate: string;
  pointOfRegistration: string;
  sex?: string | null;
  birthDate?: string | null;
  location?: string | null;
  email?: string | null;
  jobTitle?: string | null;
  jobType?: string | null;
};
