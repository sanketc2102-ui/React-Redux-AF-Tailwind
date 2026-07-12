import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'sanket',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername(state, action) {
      state.username = action.payload;
    },
  },
});

console.log(userSlice);

const actions = userSlice.actions;

export default userSlice.reducer;
