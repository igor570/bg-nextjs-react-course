export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  relevanceScore?: number;
  daysAgo: number;
};

export type SearchFormProps = {
  formValue: string;
  setFormValue: (formValue: string) => void;
};

export type JobContent = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};
