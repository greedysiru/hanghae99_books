// 사용자 정보 관리 모듈
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";
import Signup from "../../pages/Signup";
// Actions
const LOG_OUT = "LOG_OUT";
const SET_USER = 'SET_USER';


// Action Creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// Initial state
const initialState = {
  username: null,
  is_login: false,
}




// const logoutAPI = () => {
//   return function (dispatch, getState, { history }) {
//     auth.signOut().then(() => {
//       dispatch(logOut());
//       history.replace('/');
//     })
//   }
// }

// 회원 가입
const signupAPI = (id, pwd, pwd_check) => {
  return function (dispatch, getState, { history }) {
    const API = "http://seungwook.shop/user/signup";

    fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: id,
        password: pwd,
        passwordConfirm: pwd_check,
      })
    })
      .then((response) => response)
      .then((result) => {
        dispatch(setUser({
          id: id,
        }))
        console.log(result);
        window.alert('회원가입 되었습니다.')
        history.push('/')
      })
  }
}

// 로그인
const loginAPI = (id, pwd) => {
  return function (dispatch, getState, { history }) {

    const API = "http://seungwook.shop/user/login";
    fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: id,
        password: pwd,
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          // 로컬스토리지 저장
          localStorage.setItem('is-token', response.token);
          window.alert('로그인되었습니다.')
          history.push('/')
        }
      })
  }
}

// Reducers
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);


// Action Creators export
const actionCreators = {
  signupAPI,
  loginAPI,
};

export { actionCreators };