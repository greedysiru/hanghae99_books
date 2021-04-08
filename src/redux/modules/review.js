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
// 기존 리뷰를 수정하는 액션
const EDIT_REVIEW = "EDIT_REVIEW";



// Action Creators
const setStar = createAction(SET_STAR, (review) => ({ review }));
const writeText = createAction(WRITE_TEXT, (review) => ({ review }));
const getReview = createAction(GET_REVIEW, (user_comment, review) => ({ user_comment, review }));
const editReivew = createAction(EDIT_REVIEW, (comment_id, review) => ({ comment_id, review }));


// Initial state
const initialState = {
  text: null,
  star: null,
  // 사용자가 리뷰를 남긴 경우의 코멘트 아이디
  user_comment: null,
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
    const API = `http://seungwook.shop/api/books/${id}/comments`;
    const token = localStorage.getItem('is_token');
    if (text === "" || star === 0) {
      window.alert('리뷰 내용을 작성해주세요.')
      return
    }
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
        // 리뷰정보 다시 가져오기
        dispatch(getReviewAPI(id));
      })
      .catch((error) => {
        dispatch(setStarRating(0));
        dispatch(setText(""));
        console.log(error);
        localStorage.removeItem("is_token");
        localStorage.removeItem("login_id")
        window.alert('토큰이 만료되었습니다. 로그인 후 다시 시도해주세요.');
      })
  }
}

// 페이지에 맞춰 책 리뷰 가져오기
const getReviewAPI = (id) => {
  return function (dispatch, getState, { history }) {
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
        // 사용자의 리뷰 찾기
        const username = localStorage.getItem('login_id');
        const comment_list = _review.comment;
        let user_comment = null;

        // 코멘트 아이디 찾기
        for (let i = 0; i < comment_list.length; i++) {
          if (comment_list[i].account.username === username) {
            user_comment = comment_list[i]
          }
        }
        dispatch(getReview(user_comment, _review));
      }).catch((error) => {
        window.alert('리뷰 정보를 불러올 수 없습니다. 다시 시도해주세요.');
        console.log(error);
      });

  }
};

// 리뷰 수정 API
const editReviewAPI = () => {
  return function (dispatch, getState, { history }) {
    const comment_id = getState().review.user_comment.id;
    const id = getState().books.book_info.id;
    const text = getState().review.text;
    const star = getState().review.star;
    if (text === null || star === 0) {
      window.alert('별점과 내용을 수정해주세요.')
      return
    }
    const API = `http://seungwook.shop/api/books/${id}/comments/${comment_id}`;
    const token = localStorage.getItem('is_token');
    axios.put(API,
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
        window.alert('리뷰가 수정되었습니다.');
        dispatch(setStarRating(0));
        dispatch(setText(""));
        // 리뷰정보 다시 가져오기
        dispatch(getReviewAPI(id));
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("is_token");
        localStorage.removeItem("login_id")
        window.alert('토큰이 만료되었습니다. 로그인 후 다시 시도해주세요.');
      })
  }
}

// 리뷰 삭제 API
const deleteReviewAPI = () => {
  return function (dispatch, getState, { history }) {
    const comment_id = getState().review.user_comment.id;
    const id = getState().books.book_info.id;
    const API = `http://seungwook.shop/api/books/${id}/comments/${comment_id}`;
    const token = localStorage.getItem('is_token');
    axios.delete(API,

      {
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        window.alert('리뷰가 삭제되었습니다.');
        dispatch(setStarRating(0));
        dispatch(setText(""));
        // 리뷰정보 다시 가져오기
        dispatch(getReviewAPI(id));
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("is_token");
        localStorage.removeItem("login_id")
        window.alert('토큰이 만료되었습니다. 로그인 후 다시 시도해주세요.');
      })
  }
}

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
      draft.user_comment = action.payload.user_comment
    })
  },
  initialState
);


// Action Creators export
const actionCreators = {
  setStarRating,
  writeText,
  setText,
  writeReviewAPI,
  getReviewAPI,
  editReviewAPI,
  deleteReviewAPI,
};

export { actionCreators };
