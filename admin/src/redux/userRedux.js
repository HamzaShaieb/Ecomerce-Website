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

    //Add

    adduserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    adduserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    adduserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
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
  
   //UPDATE
    updateusersStart: (state) => {
    state.isFetching = true;
    state.error = false;
    },
    updateusersSuccess: (state, action) => {
    state.isFetching = false;
    state.userss[
      state.users.findIndex((item) => item._id === action.payload.id)
    ] = action.payload.users;
    },
    updateusersFailure: (state) => {
    state.isFetching = false;
    state.error = true;
     },
});

export const { loginStart, loginSuccess, loginFailure,getusersFailure,getusersStart,getusersSuccess,deleteuserFailure,deleteuserSuccess,deleteuserStart,updateusersStart,updateusersSuccess,updateusersFailure,adduserStart,adduserSuccess,adduserFailure } = userSlice.actions;
export default userSlice.reducer;
