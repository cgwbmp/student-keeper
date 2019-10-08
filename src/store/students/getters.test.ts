import {
  get,
} from './getters';
import { Student } from '../../types';

describe('get()', () => {
  const state: Array<Student> = [
    {
      id: '1',
      fullName: 'Name',
      birthday: '2000-01-01',
      academicPerformance: 1,
    },
  ];
  const result = get(state);
  it('returns all students', () => {
    expect(result).toEqual(state);
  });
});
