import { CaseReducer, ActionCreatorWithOptionalPayload } from 'redux-starter-kit';
import { State } from './state';
import {
  add as addStudent,
  save as saveStudent,
  remove as removeStudent,
} from './data-models/students/setters';
import {
  startAddNewStudent,
  endAddNewStudent,
  startEditStudent,
  endEditStudent,
} from './data-models/ui/setters';

const create: CaseReducer<State, ActionCreatorWithOptionalPayload<State>> = state => ({
  ...state,
  ui: startAddNewStudent(state.ui),
});

const confirmCreating: CaseReducer<State> = (state, action) => ({
  students: addStudent(state.students, action.payload),
  ui: endAddNewStudent(state.ui),
});

const cancelCreating: CaseReducer<State, ActionCreatorWithOptionalPayload<State>> = state => ({
  ...state,
  ui: endAddNewStudent(state.ui),
});

const edit: CaseReducer<State> = (state, action) => ({
  ...state,
  ui: startEditStudent(state.ui, action.payload),
});

const confirmEditing: CaseReducer<State> = (state, action) => ({
  students: saveStudent(state.students, action.payload),
  ui: endEditStudent(state.ui, action.payload.id),
});

const cancelEditing: CaseReducer<State> = (state, action) => ({
  ...state,
  ui: endEditStudent(state.ui, action.payload),
});

const remove: CaseReducer<State> = (state, action) => ({
  ...state,
  students: removeStudent(state.students, action.payload),
});

export {
  create,
  confirmCreating,
  cancelCreating,
  edit,
  confirmEditing,
  cancelEditing,
  remove,
};
