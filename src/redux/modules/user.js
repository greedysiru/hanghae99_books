// 사용자 정보 관리 모듈
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";

// axios
import axios from 'axios';


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

// 회원 가입
const signupAPI = (id, pwd, pwd_check) => {
  return function (dispatch, getState, { history }) {
    const API = "http://seungwook.shop/api/signup";

    axios.post(API,
      {
        "username": id,
        "password": pwd,
        "passwordConfirm": pwd_check,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        console.log(response);
        window.alert('회원가입 되었습니다. 로그인해주세요.')
      }).catch((error) => {
        console.log(error);
        window.alert(error);
      })

    // fetch(API, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: id,
    //     password: pwd,
    //     passwordConfirm: pwd_check,
    //   })
    // })
    //   .then((response) => response)
    //   .then((result) => {
    //     console.log(result);
    //     window.alert('회원가입 되었습니다. 로그인해주세요.')
    //     history.push('/')
    //   })
  }
}

// 로그인
const loginAPI = (id, pwd) => {
  return function (dispatch, getState, { history }) {

    const API = "http://seungwook.shop/api/login";

    axios.post(API,
      {
        "username": id,
        "password": pwd,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        if (response.data.token) {
          // 로컬스토리지 저장
          localStorage.setItem("is_token", response.data.token);
          localStorage.setItem("login_id", id);
          dispatch(setUser({
            username: id,
          }))
          window.alert('로그인되었습니다.');
          history.goBack();
        }
      }).catch((error) => {
        console.log(error);
        window.alert(error);
      })


    // fetch(API, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: id,
    //     password: pwd,
    //   })
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.token) {
    //       // 로컬스토리지 저장
    //       localStorage.setItem("is_token", response.token);
    //       localStorage.setItem("login_id", id);
    //       dispatch(setUser({
    //         username: id,
    //       }))
    //       window.alert('로그인되었습니다.');
    //       history.push('/');
    //     }
    //   })
  }
}

// 로그아웃
// 로컬스토리지에서 토큰 지우기
const logoutStorage = () => {
  return function (dispatch, getState, { history }) {
    const id = getState().user.username;
    localStorage.removeItem("is_token");
    localStorage.removeItem("login_id")
    dispatch(logOut());
    window.alert('로그아웃 되었습니다.');
    // 로그아웃 후 메인페이지로
    history.replace('/');
    // 리덕스 초기화를 위한 새로고침
    window.location.reload();
  }
}

// 로그인 체크
const logInCheckStorage = () => {
  return function (dispatch, getState, { history }) {
    // 토큰 가져오기
    const token = localStorage.getItem('is_token');
    const id = localStorage.getItem('login_id');
    // 토큰이 없으면 재로그인 alert
    // 있다면 유지
    if (!token) {
      return
    } else {
      dispatch(setUser({
        username: id,
      }))
    }
  };
};
// Reducers
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.username = action.payload.user.username;
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
  logoutStorage,
  logInCheckStorage,
};

export { actionCreators };