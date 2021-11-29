import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link, withRouter } from "react-router-dom";
import { toast } from 'react-toastify';

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  },
  container: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1080px",
    margin: "0 auto"
  },
  paper: {
    padding: "20px 30px 50px 15px",
    margin: "100px auto 30px"
  }
});

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    password2: "",
    name: "",
    error: "",
    showPassword: false
  };

  success = () => {
    toast.success("Sigup Successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
    }

  error = () => {
    toast.error("Invalid Signup!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
    }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    if (!this.state.email || !this.state.password || !this.state.name) {
      this.setState({
        error: "Please fill all the feilds correctly"
      });
    } else if (this.state.password !== this.state.password2) {
      this.setState({
        error: "Password didn't matched"
      });
    } else {
      let data = {
        username: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      var url = "/api/users/signup";

      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(res => res.json())
        .then(response => {
          console.log("Success:");
          this.success();
          this.props.history.push("/login");
        })
        .catch(error =>{
           console.error("Error:", error);
           this.error();
          });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <h1>Register Here</h1>
              <form onSubmit={this._handleSubmit}>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="adornment-password">
                    Full Name
                  </InputLabel>
                  <Input
                    id="name"
                    type="test"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                  />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="adornment-password">Email</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">Password</InputLabel>
                  <Input
                    id="adornment-password"
                    type={this.state.showPassword ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-match-password">
                    Confirm Password
                  </InputLabel>
                  <Input
                    id="adornment-match-password"
                    type="password"
                    error={this.state.error ? true : false}
                    value={this.state.password2}
                    onChange={this.handleChange("password2")}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Register
                </Button>
                {this.state.error && (
                  <p style={{ color: "red" }}>{this.state.error}</p>
                )}
              </form>
              <Link to="/login" style={{ marginTop: "20px" }}>
                Already have an account? Login here!
              </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(SignUp));


// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
// import { Card, CardText } from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


// const SignUp = ({
//   onSubmit,
//   onChange,
//   errors,
//   user,
// }) => (
//   <Card className="container">
//     <form action="/" onSubmit={onSubmit}>
//       <h2 className="card-heading">Sign Up</h2>

//       {errors.summary && <p className="error-message">{errors.summary}</p>}

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Name"
//           name="name"
//           errorText={errors.name}
//           onChange={onChange}
//           value={user.name}
//         />
//       </div>

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Email"
//           name="email"
//           errorText={errors.email}
//           onChange={onChange}
//           value={user.email}
//         />
//       </div>

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Password"
//           type="password"
//           name="password"
//           onChange={onChange}
//           errorText={errors.password}
//           value={user.password}
//         />
//       </div>

//       <div className="button-line">
//         <Button type="submit" label="Create New Account" primary />
//       </div>

//       <CardText>Already have an account? </CardText>
//     </form>
//   </Card>
// );

// // SignUp.propTypes = {
// //   onSubmit: PropTypes.func.isRequired,
// //   onChange: PropTypes.func.isRequired,
// //   errors: PropTypes.object.isRequired,
// //   user: PropTypes.object.isRequired
// // };

// export default SignUp;