import React, { Component, Fragment } from 'react';
import './HomePage.css';
import { Category, Footer, LatestProduct, AdSearch, AdsList, AdsAll } from '../../components';
import { Grid, Typography } from '@material-ui/core';

class HomePage extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }

    render() {
        return (
            <Fragment>
                <Grid container className="box-layout_HomePage">
                    <Grid item md={12} >
                        <Typography variant="display3" align="center" color="secondary" gutterBottom>
                            WELCOME TO CLASSIALLY
                        </Typography>
                    </Grid>
                    <Grid item md={12} >
                        <AdSearch />
                    </Grid>
                </Grid>
                <Grid container className="container">
                    <Grid md={12} >
                        <div className="product-Category-Container">
                            <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                                Product Categories
                        </Typography>
                            <Typography variant="title" align="center" color="secondary" component="p">
                                Buy And Sell Everything From Used Cars To Mobile Phones And Computers,
                                Or Search For Property, Jobs And More
                        </Typography>
                        </div>
                    </Grid>
                    <Grid md={12} >
                    <div classNmae="conatiner-background">
                        <Category />
                    </div>
                    </Grid>
                    <Grid md={12} >
                        <div className="product-Category-Container">
                            <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                                LATEST PRODUCTS
                            </Typography>
                        </div>
                        <AdsAll />
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default HomePage;

