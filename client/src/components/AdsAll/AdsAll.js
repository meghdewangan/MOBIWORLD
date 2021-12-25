import React from 'react';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, IconButton
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
import { AdsList } from '../../components/';
import adsSelector from '../../store/selectors/adsSelector'

class AdsAll extends React.Component {
    state = { expanded: false };

    componentDidMount() {
        console.log('Testing getData Function');

        this.props.getAds();
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        // debugger;
        const { ads } = this.props.ads;
        console.log('filter adds adds')
        console.log(ads)
        //  console.log('data filter', this.props.filter)
        //console.log('hrllo', this.props.ads.ads);
        // let adsFilter = ads.filter(ad => {

        //     return ad.category == this.props.filter.category;
        // })

        return (

            <div>
                <Grid container  >
                    {/* <Grid item md={1}>
                    </Grid> */}
                    <Grid item md={12}>
                        <Grid container spacing={32}>
                            {/* {
                            ads.length == 0 ? 'No Ad' :(

                                adsFilter.length == 0 ?  ads.map((ads) =>

                                        (
                                            <AdsList key={ads.id} {...ads} />
                                        )
                                    ) : adsFilter.map((ads) =>
                                        (
                                            <AdsList key={ads.id} {...ads} />
                                        )
                            )
                            )
                        } */}
                            {
                                ads.length == 0 ? <div className="list-item list-item--messagea">
                                    <h1>Not Available </h1>
                                </div> : ads.map((ads) =>
                                    (
                                        <AdsList key={ads.id} {...ads} />
                                    )
                                )
                            }
                        </Grid >
                    </Grid>
                    {/* <Grid item md={1}>
                    </Grid> */}
                </Grid>
            </div>
        );
    }
}
// export default LatestProduct;
const mapStateToProps = (state) => {
    //ads: state.ads,

    // filter: state.filters  // ads from Index of Reducer file

    // return {ads: state.filters.category ?  {ads:adsSelector(state.ads, state.filters)} :state.ads}
    return { ads: state.filters.category ? { ads: adsSelector(state.ads, state.filters) } : state.ads }

};

export default connect(mapStateToProps, { getAds })(AdsAll);