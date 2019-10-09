import { State } from './state';

const startEditStudent = (state: State, id: string): State => ({
  ...state,
  showEditFormForStudents: {
    ...state.showEditFormForStudents,
    [id]: true,
  },
});

const endEditStudent = (state: State, id: string): State => ({
  ...state,
  showEditFormForStudents: {
    ...state.showEditFormForStudents,
    [id]: false,
  },
});

const startAddNewStudent = (state: State): State => ({
  ...state,
  showFormForNewStudent: true,
});

const endAddNewStudent = (state: State): State => ({
  ...state,
  showFormForNewStudent: false,
});

export {
  startEditStudent,
  endEditStudent,
  startAddNewStudent,
  endAddNewStudent,
};
