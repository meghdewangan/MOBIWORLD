import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";

// import Header from "../Header/MainHeader";
import { startLogin } from "../../store/actions/authAction";

class Login extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className="box-layout_HomePage">
        {/* <Header /> */}
        <LoginPage
          onSubmit={data => {
            this.props.dispatch(startLogin(data, this.props.history));
          }}
        />
        {user.isAuthenticated && <Redirect to="/dashbord" />}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    user: state.auth,
    // error: state.error.message
  };
};

export default connect(MapStateToProps)(Login);