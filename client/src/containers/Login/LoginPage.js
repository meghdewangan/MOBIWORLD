// import React from 'react';
// import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import LockIcon from '@material-ui/icons/LockOutlined';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import withStyles from '@material-ui/core/styles/withStyles';
// import { Link, withRouter } from "react-router-dom";

// import './Login.css';


// function Login(props) {
//     const { classes } = props;
//     return (
//         <React.Fragment>
//             <Paper className="heroContent Login_Form" >
//                 <Avatar >
//                     <LockIcon />
//                 </Avatar>
//                 <Typography variant="headline">Sign in</Typography>
//                 <form >
//                     <FormControl margin="normal" required fullWidth>
//                         <InputLabel htmlFor="email">Email Address</InputLabel>
//                         <Input id="username" name="username" autoComplete="email" autoFocus />
//                     </FormControl>
//                     <FormControl margin="normal" required fullWidth>
//                         <InputLabel htmlFor="password">Password</InputLabel>
//                         <Input name="password" type="password" id="password" autoComplete="current-password" />
//                     </FormControl>
//                     <Button type="submit" fullWidth variant="raised" color="primary">
//                         Sign in
//             </Button>
//                 </form>
//                 <Link to="signup">
//                     <Typography variant="paragraph">Create New Account</Typography>
//                 </Link>

//             </Paper>

//         </React.Fragment>
//     );
// }



// export default Login;

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
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

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        error: "",
        redirectToReferrer: false,
        showPassword: false
    };

    success = () => {
        toast.success("Login Successfully!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
    
    error = () => {
        toast.error("Invalid User Name and Password!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    _handleSubmit = e => {
        e.preventDefault();
        if (!this.state.username || !this.state.password ) {
            this.setState({
                error: "Please fill all the feilds correctly"
            });
        }  else {
            let data = {
                
                username: this.state.username,
                password: this.state.password

            };

            //we will call action here
            this.props.onSubmit(data);
            
            // console.log(data);

            // var url ="/api/users/login";

            // fetch(url, {
            //     method: "POST", // or 'PUT'
            //     body: JSON.stringify(data), // data can be `string` or {object}!
            //     headers: {
            //         "Content-Type": "application/json; charset=utf-8"
            //     }
            // })
            //     .then(res => res.json())
            //     .then(response => {
            //         console.log("Success:");
            //         console.log("Success:",response.user);
            //         this.success();
            //         this.props.history.push("/dashbord");
            //     })
                
            //     .catch(error => {
            //         console.log("Error:", error);
            //         this.error();
            //     });
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid className={classes.container} container >
                    <Grid item  >
                        <Paper className={classes.paper}>
                            <Avatar >
                                <LockIcon />
                            </Avatar>
                            <Typography variant="headline">Sign in</Typography>

                            {/* <div className={classes.root}> */}
                            <h1>User Login</h1>
                            <form onSubmit={this._handleSubmit}>

                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                    <Input
                                        id="username"
                                        type="email"
                                        value={this.state.username}
                                        onChange={this.handleChange("username")}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={classNames(classes.margin, classes.textField)}
                                >
                                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                    <Input
                                        id="password"
                                        type= "password"
                                        value={this.state.password}
                                        onChange={this.handleChange("password")}
                                    />
                                </FormControl>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                >
                                    login
                                </Button>
                                {this.state.error && (
                                    <p style={{ color: "red" }}>{this.state.error}</p>
                                )}
                            </form>
                            <Link to="signup">
                                <Typography >Create New Account</Typography>
                            </Link>
                            {/* </div> */}
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(LoginPage));