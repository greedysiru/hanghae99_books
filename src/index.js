import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';

// 부트스트랩
import 'bootstrap/dist/css/bootstrap.min.css';

// SCSS
import './styles/basic.scss';

// 스토어
import store from './redux/configStore';

// 라우터
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // 스토어 연동
  <BrowserRouter store={store}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
