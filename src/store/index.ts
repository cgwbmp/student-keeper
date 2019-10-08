import { configureStore } from 'redux-starter-kit';
import studentsReducer, { slice as studentsSlice } from './students';
import uiReducer, { slice as uiSlice } from './ui';
import { getStudents, setStudents } from '../locale-storage/students';

const students = getStudents() || [];

const store = configureStore({
  reducer: {
    [studentsSlice]: studentsReducer,
    [uiSlice]: uiReducer,
  },
  preloadedState: {
    [studentsSlice]: students,
  },
});

let currentStudents: typeof students;
store.subscribe(() => {
  const previousStudents = currentStudents;
  currentStudents = store.getState()[studentsSlice];
  if (currentStudents !== previousStudents) {
    setStudents(currentStudents);
  }
});

export default store;
