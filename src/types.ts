import { score } from './constants';

export interface Student {
  id: string,
  fullName: string,
  birthday: string,
  academicPerformance?: score
}

export type Triggers = { [s: string]: boolean };
