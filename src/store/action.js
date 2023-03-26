import { USER_LOGGED_SUCCESS, ADD_PRODUCT } from "./costance";
import {db} from '../firebase-config';
import { addDoc, collection, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const SAVE_BOOK = () => async (dispatch) => {
  try {
    const books = JSON.parse(localStorage.getItem("books"));
    dispatch({ type: ADD_PRODUCT, payload: books });
  } catch (err) {
    console.log(err);
  }
};
export const READ_PRODUCTS = () => async (dispatch) => {
  try{
debugger;    

    await getDocs(collection(db, "admin"))
    .then((data) => {
      dispatch({type: ADD_PRODUCT, payload: data.docs})
      debugger;
    })
  }catch(err){
    debugger;
    console.log(err)
  }
}

//---------------------------------------- USER LOG ------------------------------------------------------
  export const USER_SIGNUP =
    (
      auth,
      registerEmail,
      registerPassword
    ) =>
    async (dispatch) => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        localStorage.setItem("user", JSON.stringify(user));
        // const currentUser = JSON.parse(localStorage.getItem ('user'))
        dispatch({
          type: USER_LOGGED_SUCCESS,
          payload: user,
        });
        // window.location.assign("/book");
        console.log(user);
      } catch (err) {
        console.log(err);
        console.log("Email o password non valide");
      }
    };

  export const USER_LOGIN =
    (auth, loginEmail, loginPassword) => async (dispatch) => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        dispatch({
          type: USER_LOGGED_SUCCESS,
          payload: user,
        });
      } catch (err) {
        // console.log(err);
        console.log("Email o password non valide");
      }
    };
  export const LOG_OUT = () => async (dispatch) => {
    try {
      const user = {};

      dispatch({
        type: USER_LOGGED_SUCCESS,
        payload: user,
      });
    } catch (err) {
      console.log(err);
      console.log("Email o password non valide");
    }
  };
