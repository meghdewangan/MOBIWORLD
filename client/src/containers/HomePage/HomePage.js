import React, { Component, Fragment } from 'react';
import './HomePage.css';
import { Category, Footer, LatestProduct, AdSearch, AdsList, AdsAll, Slider } from '../../components';
import { Grid, Typography } from '@material-ui/core';
// import Slider from '../../components/Slider/Slider';

class HomePage extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }
// C:\Users\gaurav computer\Projects\MOBIWORLD\client\node_modules\bootstrap\dist\css\bootstrap.min.css
    render() {
        return (
            <Fragment>
                {/* <Grid md={12} >
                    <div>
                        <Slider/>
                    </div>
                    </Grid> */}
                <Grid container className="box-layout_HomePage">
                    <Grid item md={12} >
                    <h1
              style={{
                color: "#ffff66",
                fontSize: "6em",
                textShadow:
                  "5px 10px 10px 8px #box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                textAlign: "center",
              }}
            >
              Welcome To Mobile World
            </h1>
                    </Grid>
                    <Grid item md={12} >
                        <AdSearch />
                    </Grid>
                </Grid>
                <Grid container className="container">
                    <Grid md={12} >
                        <div className="product-Category-Container">
                            <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                                Mobile's Categories
                        </Typography>
                            <Typography variant="title" align="center" color="secondary" component="p">
                                Buy And Sell Everything Second Hand Mobile Phones With Best Condition And Lowest Price.
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
                            <Typography variant="title" align="center" color="secondary" component="p">
                                Buy Now
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