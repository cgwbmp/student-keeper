import {
  get,
} from './getters';
import { State } from './state';

describe('get()', () => {
  const state: State = [
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
