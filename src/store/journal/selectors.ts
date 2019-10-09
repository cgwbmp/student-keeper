import { State } from './state';
import {
  get,
} from './data-models/students/getters';
import {
  isVisibleFormForNewStudent as isCreating,
  isVisibleEditFormStudent as isEditing,
} from './data-models/ui/getters';

const getStudents = (state: State): typeof state.students => get(state.students);

const isVisibleFormForNewStudent = (state: State): boolean => isCreating(state.ui);

const isVisibleEditFormStudent = (state: State, id: string): boolean => isEditing(state.ui, id);

export default null;
export {
  getStudents,
  isVisibleFormForNewStudent,
  isVisibleEditFormStudent,
};
