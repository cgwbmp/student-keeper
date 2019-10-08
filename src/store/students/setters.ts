import { ReduxSetter } from '../types';
import { Student } from '../../types';

const add: ReduxSetter<Array<Student>, Student> = (state, action) => [
  ...state,
  action.payload,
];

const remove: ReduxSetter<Array<Student>, string> = (state, action) => state
  .filter(({ id }) => id !== action.payload);

const save: ReduxSetter<Array<Student>, Student> = (state, action) => {
  const changedStudent = action.payload;
  return state.map(student => (
    (student.id === changedStudent.id) ? changedStudent : student
  ));
};

export {
  add,
  remove,
  save,
};
