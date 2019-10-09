import { State } from './state';

const isVisibleFormForNewStudent = (state: State): boolean => (
  state.showFormForNewStudent
);

const isVisibleEditFormStudent = (state: State, id: string): boolean => (
  state.showEditFormForStudents[id]
);

export {
  isVisibleFormForNewStudent,
  isVisibleEditFormStudent,
};
