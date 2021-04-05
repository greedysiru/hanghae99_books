// 책 정보 모듈
import { createAction, handleActions } from "redux-actions";
// 불변성 관리 패키지
import { produce } from "immer";
import context from "react-bootstrap/esm/AccordionContext";

// Actions
// 보여줄 책 리스트들 다룰 액션
const SET_BOOKS = "SET_BOOKS";
// 현재 페이지, 시작 또는 끝 페이지를 다루는 액션
const UPDATE_CURRENT = "UPDATE_CURRENT";
const UPDATE_START_END = "UPDATE_START_END";


// Action Creators
const setBooks = createAction(SET_BOOKS, (book_list) => ({ book_list }));
const updateCurrent = createAction(UPDATE_CURRENT, (paging) => ({ paging }));
const updateStartEnd = createAction(UPDATE_START_END, (paging) => ({ paging }));

// Intial State
const initialState = {
  book_list: [],
  // 페이지네이션 초기값
  paging: {
    // 시작
    start: 1,
    // 끝
    end: 10,
    // 현재 페이지
    current: 1,
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
const bookListAPI = () => {
  return function (dispatch, getState, { history }) {
    const current = getState().books.paging.current;
    const API = `http://seungwook.shop/api/books?page=${current}&size=24`;
    fetch(API, {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(_book_list => {
        console.log(_book_list);
        dispatch(setBooks(_book_list));
      });

  }
};




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
  },
  initialState
);






// Action Creators export
const actionCreators = {
  updateCurrentPage,
  updateStartEndPage,
};

export { actionCreators };