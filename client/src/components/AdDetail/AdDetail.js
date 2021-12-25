import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAdsById } from '../../store/actions/adsAction';
import {
    CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, Hidden
} from '@material-ui/core';
// import './AdsList.css';


class AdDetail extends Component {
    
    
    render() {
        
        const { ads } = this.props.ads;
        console.log('Hi2',ads);
        
        let filteredAds = ads.find((ad) => ad._id === this.props.match.params.id);
        
        return (
            <Fragment>
                <div className="layout">
                    <center><h1>Detail</h1></center>
                    
                    {
                        ads._id == this.props.match.params.id ? 'No Ad' :
                            /* Sub featured posts */
                            < Grid container  >
                            <Grid item md={1}>
                            </Grid>

                            <Grid item md={10}>
                            
                                {
                                   

                                      
                                       
                                        <Grid container>
                                            <Grid item  xs={12} md={8}>
                                                <Hidden xsDown>
                                                    <CardMedia
                                                        style={{ width: '100%', height: '100%' }}
                                                        image={`/upload/${filteredAds.file}`} // eslint-disable-line max-len
                                                        title="Image title"
                                                    />

                                                </Hidden>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <CardContent>
                                                    <Typography style={{ backgroundColor: 'orange', padding: '10%' }} variant="title" gutterBottom align="center" >
                                                        {`${filteredAds.mobileName} (${filteredAds.category})`}
                                                    </Typography>
                                                    <Typography variant="headline" >{filteredAds.description}</Typography>
                                                    {/* <Typography variant="subheading" color="textSecondary">
                                                        {filteredAds.category.charAt(0).toUpperCase() + filteredAds.category.slice(1)}
                                                    </Typography> */}
                                                    <Typography variant="subheading" color="textSecondary">
                                                        {`OLD :  ${filteredAds.old}`}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                        {`Rs. ${filteredAds.priceOld}`}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                        {`IMEI NUMBER :  ${filteredAds.imei}`}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                        {`SELLER NAME :  ${filteredAds.name}`}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                    <i class="fas fa-map-marker-alt"></i> {filteredAds.address}
                                                    </Typography>

                                                    <Typography variant="subheading" paragraph>
                                                    <i class="fas fa-city"></i> {filteredAds.city}
                                                    </Typography>
                                                    {/* <Typography variant="subheading" paragraph>
                                                    <i class="fas fa-city"></i>  {filteredAds.city}
                                                    </Typography> */}

                                                    <Typography variant="subheading" paragraph>
                                                    <i class="fas fa-phone"></i> {filteredAds.phone}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                    <i class="fas fa-envelope"></i> {filteredAds.email}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                    <i class="fas fa-calendar-alt"></i> {filteredAds.created_date}
                                                    </Typography>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                    

                                }
                                </Grid>
                            <Grid item md={1}>
                            </Grid>
                            </Grid>
                        /* End sub featured posts */

                    }


                </div>

            </Fragment>
        );
    }
}

// const mapStateToProps = (state, props) => ({
//     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
// });

const mapStateToProps = (state) => ({
    ads: state.ads // ads from Index of Reducer file
});

export default connect(mapStateToProps, { getAdsById })(AdDetail);