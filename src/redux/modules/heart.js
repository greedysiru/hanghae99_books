// 좋아요 정보 관리 모듈
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";

// axios
import axios from 'axios';


// Actions
const GET_HEART = "GET_HEART";
const ADD_HEART = 'ADD_HEART';
const DELETE_HEART = 'DELETE_HEART';

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
    // 로그아웃 상태이면 실행하지 않기
    if (!token) {
      return
    }
    axios.get(API,
      {
        headers: {
          'Authorization': `${token}`,
        }
      })
      .then((response) => {
        console.log(response)
        return response.data
      })
      .then((_heart_info) => {
        // 리덕스에 담기
        console.log(_heart_info)
        dispatch(getHeart(_heart_info));
      }).catch((error) => {
        console.log(error);
      });
  }
}

// 좋아요



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
};

export { actionCreators };