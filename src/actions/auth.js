import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";
import AuthService from "../services/auth-services";

const error = (err) => {
  const message = (err.response && err.response.data && err.response.data.message)
    || err.message || err.toString();
  return message;
}


export const signup = (name, email, password, passwordConfirm) =>
  (dispatch) => {
    return AuthService.signup(name, email, password, passwordConfirm)
      .then(data => {
        console.log(data);
        try {
          if (data) {
            dispatch({
              type: REGISTER_SUCCESS,
              payload: { user: data }
            })
            return Promise.resolve();
          }
        } catch (err) {
          const message = error(err);
          console.log(message)

          dispatch({
            type: REGISTER_FAIL
          });

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        }


      })
    // (error) => {
    //   const message = err(error);
    //   console.log(message);
    //   dispatch({
    //     type: REGISTER_FAIL
    //   });

    //   dispatch({
    //     type: SET_MESSAGE,
    //     payload: message,
    //   });

    //   return Promise.reject();
  }


export const login = (email, password) =>
  (dispatch) => {
    return AuthService.login(email, password).then((data) => {
      console.log(data);
      try {
        if (data) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data }
          });
          return Promise.resolve();
        } else {
          dispatch({
            type: LOGIN_FAIL
          });
          return Promise.reject();
        }
      } catch (err) {
        dispatch({
          type: LOGIN_FAIL
        });
        const message = error(err);
        console.log(message)
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }


    })
    // (error) => {
    //   const message = err(error);
    //   console.log(message)

    //   dispatch({
    //     type: LOGIN_FAIL
    //   });

    //   dispatch({
    //     type: SET_MESSAGE,
    //     payload: message,
    //   });

    //   return Promise.reject();
    // }
  }


export const logout = () =>
  (dispatch) => {
    new AuthService.logout();

    dispatch({
      type: LOGOUT,
    })
  }

export const autoLogin = () =>
  (dispatch) => {

  }