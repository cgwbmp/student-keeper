import {
  isVisibleFormForNewStudent,
  isVisibleEditFormStudent,
} from './getters';
import defaultState, { State } from './state';

describe('isVisibleFormForNewStudent()', () => {
  const state: State = {
    ...defaultState,
    showFormForNewStudent: true,
  };
  const result = isVisibleFormForNewStudent(state);
  it('returns trigger for form visibility for new student', () => {
    expect(result).toBeTruthy();
  });
});

describe('isVisibleEditFormStudent()', () => {
  const state: State = {
    ...defaultState,
    showEditFormForStudents: {
      1: true,
    },
  };
  const result = isVisibleEditFormStudent(state, '1');
  it('returns trigger for form visibility for new student', () => {
    expect(result).toBeTruthy();
  });
});
