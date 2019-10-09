import { Student } from '../../types';

export interface State {
  students: Array<Student>,
  ui: {
    showEditFormForStudents: { [s: string]: boolean },
    showFormForNewStudent: boolean,
  },
}

const initialState: State = {
  students: [],
  ui: {
    showEditFormForStudents: {},
    showFormForNewStudent: false,
  },
};

export default initialState;
