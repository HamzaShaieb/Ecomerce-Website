import { 
  loginFailure, 
  loginStart, 
  loginSuccess,
  getusersStart,
  getusersSuccess,
  getusersFailure,
  deleteuserStart,
  deleteuserSuccess,
  deleteuserFailure,
  updateusersStart,
  updateusersSuccess,
  updateusersFailure
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
 
//Auth Api Call

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(loginFailure());
  }
};

//Users Api Call

export const getUsers = async (dispatch) => {
  dispatch(getusersStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getusersSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(getusersFailure());
  }
};
export const adduser = async (user, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/auth/register`, user);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
export const deleteusers = async (id, dispatch) => {
  dispatch(deleteuserStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteuserFailure());
  }
};
export const updateusers = async (id, user, dispatch) => {
  dispatch(updateProductStart(id,user));
  try {
    const res = await userRequest.put(`/users/${id}`,user);
    console.log(res.data)
    dispatch(updateusersSuccess( id, user ));
    console.log(res.data)
  } catch (err) {
    dispatch(updateProductFailure());
    console.log(err)
  }
};


// Products Api Call
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`,product);
    dispatch(updateProductSuccess( id, product ));
    console.log(res.data)
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
