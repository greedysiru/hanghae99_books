// 책 정보 모듈
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";

// axios
import axios from 'axios';

// 리뷰 액션
import { actionCreators as reviewActions } from "./review";
// 좋아요 액션
import { actionCreators as heartActions } from './heart';


// Actions
// 보여줄 책 리스트들 다룰 액션
const SET_BOOKS = "SET_BOOKS";
// 현재 페이지, 시작 또는 끝 페이지를 다루는 액션
const UPDATE_CURRENT = "UPDATE_CURRENT";
const UPDATE_START_END = "UPDATE_START_END";
// 상세 페이지 책 정보를 다룰 액션
const GET_BOOK_INFO = "GET_BOOK_INFO";



// Action Creators
const setBooks = createAction(SET_BOOKS, (book_list) => ({ book_list }));
const updateCurrent = createAction(UPDATE_CURRENT, (paging) => ({ paging }));
const updateStartEnd = createAction(UPDATE_START_END, (paging) => ({ paging }));
const getBookInfo = createAction(GET_BOOK_INFO, (book_info) => ({ book_info }));

// Intial State
const initialState = {
  // 책 목록을 담는 배열
  book_list: [],
  // 페이지네이션 초기값
  paging: {
    // 시작
    start: 1,
    // 끝
    end: 10,
    // 현재 페이지
    current: 1,
  },
  // 디테일 페이지의 책 정보
  book_info: {
    // id: 'id',
    // imgUrl: 'imgUrl',
    // title: 'title',
    // bookElement: 'bookElement',
    // description: 'description',
    // createdAt: 'createdAt',
    // modifiedAt: 'modifiedAt',
  }
}

// 페이지 이동
// 현재 페이지
const updateCurrentPage = (page) => {
  return function (dispatch, getState, { history }) {
    // 리덕스에 현재 페이지 저장
    dispatch(updateCurrent({
      current: page
    }));
    // 서버로부터 북 리스트 가져오기
    dispatch(bookListAPI());

  }
};
// 처음, 끝 페이지
const updateStartEndPage = (start, end) => {
  return function (dispatch, getState, { history }) {
    dispatch(updateStartEnd({
      start: start,
      end: end,
    }))
  }
}

// 페이지에 맞춰 책 리스트 가져오기
const bookListAPI = (select) => {
  return function (dispatch, getState, { history }) {
    const current = getState().books.paging.current;
    // const API = `http://seungwook.shop/api/books?sort=createdAt&page=${current}&size=24`;
    const API = `http://seungwook.shop/api/books?sort=${select}&page=${current}&size=24`;
    console.log(API)
    axios.get(API)
      .then((response) => {
        return response.data
      })
      .then((_book_list) => {
        // 리덕스에 담기
        dispatch(setBooks(_book_list));
      }).catch((error) => {
        console.log(error);
      });

    // fetch(API, {
    //   method: 'GET',
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(_book_list => {
    //     dispatch(setBooks(_book_list));
    //   });

  }
};

// 책 상세 정보 가져오기
const bookInfoAPI = (book_id) => {
  return function (dispatch, getState, { history }) {
    const API = `http://seungwook.shop/api/books/${book_id}`;
    axios.get(API)
      .then((response) => {
        return response.data
      })
      .then((_book_info) => {
        // 리덕스에 담기
        dispatch(getBookInfo(_book_info));
      })
      .then(
        // 좋아요 정보
        dispatch(heartActions.getHeartAPI(book_id))
      )
      .then(
        // 리뷰정보
        dispatch(reviewActions.getReviewAPI(book_id))
      )
      .catch((error) => {
        window.alert('책 정보를 불러오지 못했습니다. 재시도해주세요.')
        console.log(error);
      });
  }
}

// Reducers
export default handleActions(
  {
    [SET_BOOKS]: (state, action) =>
      produce(state, (draft) => {
        draft.book_list = action.payload.book_list;
      }),
    [UPDATE_CURRENT]: (state, action) =>
      produce(state, (draft) => {
        draft.paging.current = action.payload.paging.current;
      }),
    [UPDATE_START_END]: (state, action) =>
      produce(state, (draft) => {
        draft.paging.start = action.payload.paging.start;
        draft.paging.end = action.payload.paging.end;
      }),
    [GET_BOOK_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.book_info = action.payload.book_info;
      })
  },
  initialState
);






// Action Creators export
const actionCreators = {
  updateCurrentPage,
  updateStartEndPage,
  bookListAPI,
  bookInfoAPI,
};

export { actionCreators };