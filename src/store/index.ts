import { configureStore } from 'redux-starter-kit';
import students, { slice as studentsSlice } from './students';
import ui, { slice as uiSlice } from './ui';

const store = configureStore({
  reducer: {
    [studentsSlice]: students,
    [uiSlice]: ui,
  },
});

export default store;
