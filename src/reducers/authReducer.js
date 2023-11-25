import {createSlice} from '@reduxjs/toolkit';

const authUser = createSlice({
  name: 'auth',
  initialState: {
    access_token: {
      value: '',
    },
    states: {},
  },
  reducers: {
    updateUserToken(state, action) {
      const {
        payload: {field, value},
      } = action;
      state[field].value = value;
    },
    updateStates(state, action) {
      state.states = action.payload;
    },
  },
});

export const {updateUserToken, updateStates} = authUser.actions;
export default authUser.reducer;
