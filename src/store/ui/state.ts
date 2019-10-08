export interface State {
  showEditFormForStudents: { [s: string]: boolean },
  showFormForNewStudent: boolean,
}

const initialState: State = {
  showEditFormForStudents: {},
  showFormForNewStudent: false,
};

export default initialState;
