import { createSlice } from '@reduxjs/toolkit';

const INIT_STATE = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INIT_STATE,
  reducers: {
    setFilter: (state, action) => {
      /////////////  по уроку  //////////////////////
      state.filter = action.payload;

      /////////////  по учебнику  //////////////////////
      // return {
      //   ...state,
      //   filter: action.payload,
      // };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
