import {createSlice} from '@reduxjs/toolkit';

const listdataReducer = createSlice({
  name: 'listdataReducer',
  initialState: {
    listData: {},
  },
  reducers: {
    updateListData(state, action) {
      state.listData = action.payload;
    },
  },
});

export const {updateListData} = listdataReducer.actions;
export default listdataReducer.reducer;
