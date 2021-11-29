import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Dashbord,Login, Signup, HomePage,CategoryPage} from '../containers';
import {AdPost,PageNotFound,Footer,AdsList,AdDetail,Navigation} from '../components';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const history = createBrowserHistory();

const AppRoute =()=>(
    <Router history={history}>
    <div>
    <Navigation/>
    <Switch>
        <PublicRoute path='/' component={HomePage} exact={true} />
        <PrivateRoute path='/dashbord' exact={true} component={Dashbord}  />
        <PublicRoute path='/item/:id' exact={true} component={AdDetail}   />
        <PrivateRoute path='/posting' exact={true} component={AdPost}  />
        <PublicRoute path='/login' exact={true} component={Login}  />
        <PublicRoute path='/category/:category' exact={true} component={CategoryPage} />
        <PublicRoute path='/signup' exact={true} component={Signup}  />
        {/* <PublicRoute path='/:rent' component={AdsList}   /> */}
    <Route component={PageNotFound} />
    </Switch>   
    <Footer/>
    </div>
   
</Router>
);

export default AppRoute;