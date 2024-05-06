import { createSlice } from '@reduxjs/toolkit';

const simpleSearchSlice = createSlice({
  name: 'search',
  //! we are using object here, because array takes more time to search than object
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = simpleSearchSlice.actions;

export default simpleSearchSlice.reducer;
