import { State } from './state';
import { ReduxGetter } from '../types';

const isVisibleFormForNewStudent: ReduxGetter<State, boolean> = state => (
  state.showFormForNewStudent
);

const isVisibleEditFormStudent: ReduxGetter<State, boolean> = (state, id: string) => (
  state.showEditFormForStudents[id]
);

export {
  isVisibleFormForNewStudent,
  isVisibleEditFormStudent,
};
