import {
  startEditStudent,
  endEditStudent,
  startAddNewStudent,
  endAddNewStudent,
} from './setters';
import defaultState, { State } from './state';

describe('startEditStudent()', () => {
  const state: State = defaultState;
  const id: string = '1';
  const result = startEditStudent(state, id);
  it('sets trigger to true for form visibility by student id', () => {
    expect(result.showEditFormForStudents['1']).toBeTruthy();
  });
});

describe('endEditStudent()', () => {
  const state: State = {
    ...defaultState,
    showEditFormForStudents: { 1: true },
  };
  const id: string = '1';
  const result = endEditStudent(state, id);
  it('sets trigger to false for form visibility by student id', () => {
    expect(result.showEditFormForStudents['1']).toBeFalsy();
  });
});

describe('startAddNewStudent()', () => {
  const state: State = defaultState;
  const result = startAddNewStudent(state);
  it('sets trigger to true for form visibility for new student', () => {
    expect(result.showFormForNewStudent).toBeTruthy();
  });
});

describe('endAddNewStudent()', () => {
  const state: State = {
    ...defaultState,
    showFormForNewStudent: true,
  };
  const result = endAddNewStudent(state);
  it('sets trigger to false for form visibility for new student', () => {
    expect(result.showFormForNewStudent).toBeFalsy();
  });
});
