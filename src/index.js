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

// Provider
import { Provider } from 'react-redux';


ReactDOM.render(
  // 스토어 연동
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
