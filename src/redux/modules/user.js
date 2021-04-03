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
  user: null,
  is_login: false,
}




// 회원 가입
const signupAPI = (id, pwd, pwd_check) => {
  return function (dispatch, getState, { history }) {
    // 회원 가입
    console.log('request');
    const API = "http://seungwook.shop/user/signup";

    fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: id,
        password: pwd,
        checkpw: pwd_check,
      })
    })
      .then((response) => response)
      .then((result) => {
        console.log(result);
        window.alert('회원가입 되었습니다.')
      })

  }
}

// Reducers
export default handleActions(
  {
    // [SET_USER]: (state, action) => produce(state, (draft) =>)
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
};

export { actionCreators };