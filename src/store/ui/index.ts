import { createSlice } from 'redux-starter-kit';
import initialState from './state';
import * as setters from './setters';
import * as getters from './getters';

const slice = 'ui';

const { actions, reducer } = createSlice({
  initialState,
  reducers: setters,
  slice,
});

const selectors = {
  isVisibleEditFormStudent:
    (state: { [s: string]: any }, id: string) => getters.isVisibleEditFormStudent(state[slice], id),
  isVisibleFormForNewStudent:
    (state: { [s: string]: any }) => getters.isVisibleFormForNewStudent(state[slice]),
};

export default reducer;
export {
  slice,
  initialState,
  actions,
  selectors,
};
