

import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { DashboardOutlined as Dashboard } from "@material-ui/icons";
import { CloudUploadOutlined as CloudUploadIcon } from "@material-ui/icons";

import './Navigation.css'


const Navigation = (props) => {
    // const { classes } = props;
    return (
        <div>
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <Grid container >
                        <Grid item xs={6} sm={2} md={6}>
                            <Link to="/">
                                <img src="./images/olx.png" />
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={10} md={6} >
                            <Grid className="NavMenu">


                                {/* <Link to="/login"> */}
                                    <Button variant="contained"
                                        color="default"
                                        style={{ color: "#ff0021", marginRight:"1em" }}
                                       
                                        component={Link}
                                        to={"/login"}>My Account
                                        <Dashboard/>
                                        </Button>
                                {/* </Link> */}
                                {/* <Link to="/posting"> */}
                                    <Button variant="contained" 
                                        color="default"
                                        style={{ color: "#ffffff" ,backgroundColor:"#93e84f" }}
                                        component={Link}
                                        to={"/posting"} >
                                    
                                        Submit a Free Ad
                                        <CloudUploadIcon  />
                                    </Button>
                                {/* </Link> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </div>
    )
};

export default Navigation;

