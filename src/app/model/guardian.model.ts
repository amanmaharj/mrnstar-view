import {Patient} from './patient.model'

export interface Guardian{
  id?: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  phone?: string
  patients?: Patient[];
}
