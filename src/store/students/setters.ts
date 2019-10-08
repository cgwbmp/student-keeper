import { Student } from '../../types';

interface ReduxAction<P> {
  type: string,
  payload: P,
}

interface ReduxSetter<S, P> {
  (state: S, action: ReduxAction<P>): S
}

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
