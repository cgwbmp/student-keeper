import { configureStore } from 'redux-starter-kit';
import students, { slice as studentSlice } from './students';

const store = configureStore({
  reducer: {
    [studentSlice]: students,
  },
});

export default store;
