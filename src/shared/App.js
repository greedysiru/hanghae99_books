import React from 'react';

// 라우터
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';

// 페이지
import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Detail from '../pages/Detail';

// Not Found
import NotFound from '../pages/NotFound';

// 부트스트랩
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          {/* <Route path="/" */}
          <Route path='/' exact component={Main} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/detail/:id' exact component={Detail} />
          {/* Not Found */}
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  )
};

export default App;
