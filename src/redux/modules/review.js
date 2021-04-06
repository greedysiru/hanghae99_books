// 사용자 정보 관리 모듈
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";

// axios
import axios from 'axios';



// Actions
// 별점을 기록하는 액션
const SET_STAR = "SET_STAR";
// 리뷰 텍스트를 기록하는 액션
const WRITE_TEXT = "WRITE_TEXT";
// 해당 상세 페이지의 리뷰 리스트를 조회하는 액션
const GET_REVIEW = "GET_REVIEW";


// Action Creators
const setStar = createAction(SET_STAR, (review) => ({ review }));
const writeText = createAction(WRITE_TEXT, (review) => ({ review }));
const getReview = createAction(GET_REVIEW, (review) => ({ review }));


// Initial state
const initialState = {
  text: null,
  star: null,
  review_info: {

  }
}


// 별점 기록
const setStarRating = (value) => {
  return function (dispatch, getState, { history }) {
    dispatch(setStar({
      star: value
    }))
  }
}

// 텍스트 기록
const setText = (value) => {
  return function (dispatch, getState, { history }) {
    dispatch(writeText({
      text: value
    }))
  }
}

// 서버에 리뷰 작성
const writeReviewAPI = (id) => {
  return function (dispatch, getState, { history }) {
    const id = getState().books.book_info.id;
    const text = getState().review.text;
    const star = getState().review.star;
    console.log(id, text, star)
    const API = `http://seungwook.shop/api/books/${id}/comments`;
    const token = localStorage.getItem('is_token');
    axios.post(API,
      {
        "comment": text,
        "starRate": star,
      },
      {
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        window.alert('리뷰가 작성되었습니다.');
        dispatch(setStarRating(0));
        dispatch(setText(""));
      })
      .catch((error) => {
        dispatch(setStarRating(0));
        dispatch(setText(""));
        console.log(error);
        window.alert(error);
      })
  }
}

// 페이지에 맞춰 책 리뷰 가져오기
const getReviewAPI = (id) => {
  return function (dispatch, getState, { history }) {
    console.log(id)
    const API = `http://seungwook.shop/api/books/${id}/comments`;
    axios.get(API)
      .then((response) => {
        return response.data
      })
      .then((_review) => {
        // 리덕스에 담기
        // 코멘트가 없는 경우
        if (!_review) {
          dispatch(getReview(null));
          return
        }
        dispatch(getReview(_review));
      }).catch((error) => {
        window.alert('리뷰 정보를 불러올 수 없습니다. 다시 시도해주세요.');
        console.log(error);
      });

  }
};


// Reducers
export default handleActions(
  {
    [SET_STAR]: (state, action) => produce(state, (draft) => {
      draft.star = action.payload.review.star
    }),
    [WRITE_TEXT]: (state, action) =>
      produce(state, (draft) => {
        draft.text = action.payload.review.text
      }),
    [GET_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.review_info = action.payload.review
    })
  },
  initialState
);


// Action Creators export
const actionCreators = {
  setStarRating,
  writeText,
  setStar,
  setText,
  writeReviewAPI,
  getReviewAPI,
};

export { actionCreators };
