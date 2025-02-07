import {Patient} from './patient.model'

export interface Guardian{
  g_id?: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  phone?: string
  patients?: Patient[];
}
