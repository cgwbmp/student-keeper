import { createSlice } from 'redux-starter-kit';
import initialState from './state';
import * as reducers from './reducers';
import * as selectors from './selectors';

const slice = 'journal';

const { actions, reducer } = createSlice({
  initialState,
  reducers,
  slice,
});

export default reducer;
export {
  slice,
  initialState,
  actions,
  selectors,
};
