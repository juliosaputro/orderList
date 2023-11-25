import {createSlice} from '@reduxjs/toolkit';

const listitemReducer = createSlice({
  name: 'listitemReducer',
  initialState: {
    listItem: {},
  },
  reducers: {
    updateListItem(state, action) {
      state.listItem = action.payload;
    },
  },
});

export const {updateListItem} = listitemReducer.actions;
export default listitemReducer.reducer;
