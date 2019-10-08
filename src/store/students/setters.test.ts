import {
  add,
  remove,
  save,
} from './setters';
import { Student } from '../../types';

const type = 'TYPE';

describe('add()', () => {
  const state: Array<Student> = [];
  const payload: Student = {
    id: '1',
    fullName: 'Name',
    birthday: '2000-01-01',
    academicPerformance: 1,
  };
  const result = add(state, { type, payload });
  it('adds new student to the end of array', () => {
    expect(result[0]).toBeDefined();
    expect(result.length).toEqual(1);
  });
});

describe('remove()', () => {
  const state: Array<Student> = [
    {
      id: '1',
      fullName: 'Name',
      birthday: '2000-01-01',
      academicPerformance: 1,
    },
  ];
  const payload: string = '1';
  const result = remove(state, { type, payload });
  it('removes sudent from array', () => {
    expect(result[0]).not.toBeDefined();
    expect(result.length).toEqual(0);
  });
});

describe('save()', () => {
  const state: Array<Student> = [
    {
      id: '1',
      fullName: 'Name',
      birthday: '2000-01-01',
      academicPerformance: 1,
    },
  ];
  const payload: Student = {
    id: '1',
    fullName: 'New Name',
    birthday: '2000-01-02',
    academicPerformance: 2,
  };
  const result = save(state, { type, payload });
  it('replaces changed sudent with new value', () => {
    expect(result[0]).toEqual(payload);
  });
});
