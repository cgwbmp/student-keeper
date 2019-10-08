import { createSlice } from 'redux-starter-kit';
import * as setters from './setters';
import * as getters from './getters';
import { Student } from '../../types';

const slice = 'students';

const defaultState: Array<Student> = [];

const { actions, reducer } = createSlice({
  initialState: defaultState,
  reducers: setters,
  slice,
});

const selectors = {
  get: (state: { [s: string]: any }) => getters.get(state[slice]),
};

export default reducer;
export {
  slice,
  defaultState,
  actions,
  selectors,
};
