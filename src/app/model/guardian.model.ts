import {Patient} from './patient.model'

export interface Guardian{
  id: number;
  firstName?: string;
  lastName?: string;
  memoryCare?: boolean;
  guardians?: Guardian[];
}
