import {
  startEditStudent,
  endEditStudent,
  startAddNewStudent,
  endAddNewStudent,
} from './setters';
import defaultState, { State } from './state';

const type = 'TYPE';

describe('startEditStudent()', () => {
  const state: State = defaultState;
  const payload: string = '1';
  const result = startEditStudent(state, { type, payload });
  it('sets trigger to true for form visibility by student id', () => {
    expect(result.showEditFormForStudents['1']).toBeTruthy();
  });
});

describe('endEditStudent()', () => {
  const state: State = {
    ...defaultState,
    showEditFormForStudents: { 1: true },
  };
  const payload: string = '1';
  const result = endEditStudent(state, { type, payload });
  it('sets trigger to false for form visibility by student id', () => {
    expect(result.showEditFormForStudents['1']).toBeFalsy();
  });
});

describe('startAddNewStudent()', () => {
  const state: State = defaultState;
  const result = startAddNewStudent(state, { type, payload: undefined });
  it('sets trigger to true for form visibility for new student', () => {
    expect(result.showFormForNewStudent).toBeTruthy();
  });
});

describe('endAddNewStudent()', () => {
  const state: State = {
    ...defaultState,
    showFormForNewStudent: true,
  };
  const result = endAddNewStudent(state, { type, payload: undefined });
  it('sets trigger to false for form visibility for new student', () => {
    expect(result.showFormForNewStudent).toBeFalsy();
  });
});
