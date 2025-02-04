import{Guardian} from './guardian.model';
export interface Patient{
  id?: number;

  firstName?: string;
  lastName?: string;
  memoryCare?: boolean;

  guardians?: Guardian[];


}
