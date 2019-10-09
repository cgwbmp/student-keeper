import { configureStore } from 'redux-starter-kit';
import journal, {
  initialState,
  selectors,
} from './journal';
import { getStudents, setStudents } from '../locale-storage/students';

const students = getStudents() || [];

const store = configureStore({
  reducer: journal,
  preloadedState: {
    ...initialState,
    students,
  },
});

let currentStudents: typeof students;
store.subscribe(() => {
  const previousStudents = currentStudents;
  currentStudents = selectors.getStudents(store.getState());
  if (currentStudents !== previousStudents) {
    setStudents(currentStudents);
  }
});

export default store;
