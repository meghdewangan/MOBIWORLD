import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import Header from '../components/Header';
//import Navigation from '../components/Navigation/Navigation';



import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
          <div>
              
        <Component {...props} />
        </div>
      ) : (
        <Redirect to={{
              pathname: "/login",
              state: {from : props.location}
            }}
          />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);


// export const PrivateRoute = ({
//     isAuthanicated,
//     component: Component,
//     ...rest
// }) => (
//         <Route {...rest} component={(props) => (
//             isAuthanicated ? (
//                <div> 
//                     {/* <Header /> */}
//                    <Component {...props} />
//                </div>
//             ) : (
//                     <Redirect to="/" />
//                 )
//         )} />
//     );

// const mapStateToProps = (state) => ({
//     isAuthanicated: !!state.auth.uid
// });

// export default connect(mapStateToProps)(PrivateRoute);