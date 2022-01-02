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
            <AppBar position="static" color="primary" 
            style={{
                backgroundImage:
                  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )",
              }}   >
                <Toolbar>
                    <Grid container >
                        <Grid item xs={6} sm={2} md={6}>
                            <Link to="/">
                                <img src="./images/olx.png" />
                            </Link>
                        </Grid>

                        {/* <Typography
                         component="span"
                        >
                        Span text
                        </Typography> */}

                        <Grid item xs={6} sm={10} md={6} >
                            <Grid className="NavMenu">

                                
                    
                        {/* <Grid item md={12} > */}
                            {/* < variant="contained" style={{ marginRight: "100em"}}>
                                MOBIWORLD
                            </Typography> */}
                        {/* </Grid>     */}


                                {/* <Link to="/login"> */}

                                {/* <Typography
                         component="span"
                        >
                        Span text
                        </Typography> */}
                                    {/* <Button
                                    style={{ position: "absolute", left: "110px", color: "white", fontStyle: "oblique", fontSize: "2em", borderRadius:"50px" }}>
                                    MOBIWORLD
                                    </Button>    */}
                                    
                                    <Button variant="contained"
                                        color="default"
                                        style={{ color: "#ff0021", marginRight:"1em", borderRadius:"50px" }}
                                       
                                        component={Link}
                                        to={"/login"}>MY PROFILE
                                        <Dashboard/>
                                        </Button>
                                {/* </Link> */}
                                {/* <Link to="/posting"> */}
                                    <Button variant="contained"
                                        color="default"
                                        style={{ color: "#ffffff" ,backgroundColor:"#93e84f", borderRadius:"50px" }}
                                        component={Link}
                                        to={"/posting"} >
                                        
                                        SELL PHONE 
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

