import {createSlice} from '@reduxjs/toolkit';

const actionReducer = createSlice({
  name: 'actionReducer',
  initialState: {
    action: {},
    stateData: {},
  },
  reducers: {
    updateActions(state, action) {
      state.action = action.payload;
    },
    updateStateData(state, action) {
      state.stateData = action.payload;
    },
  },
});

export const {updateActions, updateStateData} = actionReducer.actions;
export default actionReducer.reducer;
