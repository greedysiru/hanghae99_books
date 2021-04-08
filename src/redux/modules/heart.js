// 좋아요 정보 관리 모듈
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";

// axios
import axios from 'axios';


// Actions
const GET_HEART = "GET_HEART";

// Action Creators
const getHeart = createAction(GET_HEART, (heart) => ({ heart }));


// Initial state
const initialState = {
  heart: {

  }
}

// 좋아요 정보 조회
const getHeartAPI = (book_id) => {
  return function (dispatch, getState, { history }) {
    const API = `http://seungwook.shop/api/books/${book_id}/heart`;
    const token = localStorage.getItem('is_token');

    axios.get(API,
      {
        headers: {
          'Authorization': `${token}`,
        }
      })
      .then((response) => {
        return response.data
      })
      .then((_heart_info) => {
        // 리덕스에 담기
        dispatch(getHeart(_heart_info));
      }).catch((error) => {
        console.log(error);
      });
  }
}

// 좋아요
const addHeartAPI = (book_id) => {
  return function (dispatch, getState, { history }) {

    const API = `http://seungwook.shop/api/books/${book_id}/heart`;
    const token = localStorage.getItem('is_token');
    // 로그아웃 상태이면 실행하지 않기
    if (!token) {
      return
    }

    axios({
      method: "POST",
      url: API,
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      dispatch(getHeartAPI(book_id));
      window.alert('좋아요 하셨습니다.');
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }

}



// 좋아요 취소
const deleteHeartAPI = (book_id) => {
  return function (dispatch, getState, { history }) {

    const API = `http://seungwook.shop/api/books/${book_id}/heart`;
    const token = localStorage.getItem('is_token');
    // 로그아웃 상태이면 실행하지 않기
    if (!token) {
      return
    }
    axios.delete(API,
      {
        headers: {
          'Authorization': `${token}`,
        }
      })
      .then((response) => {
        dispatch(getHeartAPI(book_id));
        window.alert('좋아요를 취소하셨습니다.');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}


// Reducers
export default handleActions(
  {
    [GET_HEART]: (state, action) => produce(state, (draft) => {
      draft.heart = action.payload.heart;
    }),
  },
  initialState
);


// Action Creators export
const actionCreators = {
  getHeartAPI,
  addHeartAPI,
  deleteHeartAPI,
};

export { actionCreators };