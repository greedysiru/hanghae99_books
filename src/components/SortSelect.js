import React from 'react';

// scss
import '../styles/sort-select.scss';

// 부트스트랩
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// 리덕스
import { actionCreators as booksActions } from "../redux/modules/books";
import { useDispatch } from "react-redux";


const SortSelect = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = React.useState('createdAt');

  React.useEffect(() => {
    dispatch(booksActions.bookListAPI(select));
  }, []);

  const sortSelection = (e) => {
    setSelect(e.target.value);

    dispatch(booksActions.bookListAPI(e.target.value));
  }

  return (
    <div className="sortselect">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={sortSelection}
        value={select}
      >
        <MenuItem value="createdAt">최신순 보기</MenuItem>
        <MenuItem value="heart">좋아요순 보기</MenuItem>
        <MenuItem value="starRate">별점순 보기</MenuItem>
      </Select>
    </div>
  )
}



export default SortSelect;