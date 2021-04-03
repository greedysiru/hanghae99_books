import React from 'react';

// 라우터
import { withRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';

// 페이지
import Main from '../pages/Main';


// Not Found
import NotFound from '../pages/NotFound';

// 부트스트랩
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {
  return (
    <React.Fragment>

      <Switch>
        {/* <Route path="/" */}
        <Route path='/' exact component={Main} />

        {/* Not Found */}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  )
};

export default withRouter(App);
