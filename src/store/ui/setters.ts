import { ReduxSetter } from '../types';
import { State } from './state';

const startEditStudent: ReduxSetter<State, string> = (state, action) => {
  const studentId: string = action.payload;
  return {
    ...state,
    showEditFormForStudents: {
      ...state.showEditFormForStudents,
      [studentId]: true,
    },
  };
};

const endEditStudent: ReduxSetter<State, string> = (state, action) => {
  const studentId: string = action.payload;
  return {
    ...state,
    showEditFormForStudents: {
      ...state.showEditFormForStudents,
      [studentId]: false,
    },
  };
};

const startAddNewStudent: ReduxSetter<State> = state => ({
  ...state,
  showFormForNewStudent: true,
});

const endAddNewStudent: ReduxSetter<State> = state => ({
  ...state,
  showFormForNewStudent: false,
});

export {
  startEditStudent,
  endEditStudent,
  startAddNewStudent,
  endAddNewStudent,
};
