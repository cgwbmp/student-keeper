import { State } from './state';

const add = (state: State, student: typeof state[0]): State => [
  ...state,
  student,
];

const remove = (state: State, removedId: string): State => state
  .filter(({ id }) => id !== removedId);

const save = (state: State, changedStudent: typeof state[0]): State => state
  .map(student => (
    (student.id === changedStudent.id) ? changedStudent : student
  ));

export {
  add,
  remove,
  save,
};
