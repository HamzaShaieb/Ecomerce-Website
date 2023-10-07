import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    users : [],
  },
  reducers: {
   //Authintification
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },

   //Get All

    getusersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getusersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getusersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //Delete 
  
    deleteuserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteuserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteuserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,getusersFailure,getusersStart,getusersSuccess,deleteuserFailure,deleteuserSuccess,deleteuserStart } = userSlice.actions;
export default userSlice.reducer;
