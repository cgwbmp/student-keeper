import {
  add,
  remove,
  save,
} from './setters';
import defaultState, { State } from './state';

describe('add()', () => {
  const state: State = defaultState;
  const student: typeof state[0] = {
    id: '1',
    fullName: 'Name',
    birthday: '2000-01-01',
    academicPerformance: 1,
  };
  const result = add(state, student);
  it('adds new student to the end of array', () => {
    expect(result[0]).toBeDefined();
    expect(result.length).toEqual(1);
  });
});

describe('remove()', () => {
  const state: State = [
    {
      id: '1',
      fullName: 'Name',
      birthday: '2000-01-01',
      academicPerformance: 1,
    },
  ];
  const id: string = '1';
  const result = remove(state, id);
  it('removes sudent from array', () => {
    expect(result[0]).not.toBeDefined();
    expect(result.length).toEqual(0);
  });
});

describe('save()', () => {
  const state: State = [
    {
      id: '1',
      fullName: 'Name',
      birthday: '2000-01-01',
      academicPerformance: 1,
    },
  ];
  const student: typeof state[0] = {
    id: '1',
    fullName: 'New Name',
    birthday: '2000-01-02',
    academicPerformance: 2,
  };
  const result = save(state, student);
  it('replaces changed sudent with new value', () => {
    expect(result[0]).toEqual(student);
  });
});
