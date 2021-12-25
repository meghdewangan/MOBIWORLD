import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAdsByCategoty } from '../../store/actions/adsAction';
import { AdsList ,AdSearch} from '../../components/';
import { Grid } from '@material-ui/core';
import {adsSelectorByText} from '../../store/selectors/adsSelector';

class CategoryPage extends Component {

    componentDidMount() {
        console.log('Testing getData Function');
        console.log(this.props.match.params.category);
        this.props.getAdsByCategoty(this.props.match.params.category);
    }

    render() {
        const { ads } = this.props.ads;
        return (
            <Fragment>
                <div className="layou1t" style={{marginTop:'10vh'}}>
                
                <AdSearch/>
                    <center><h1>{this.props.match.params.category.toUpperCase()}</h1></center>
                    <Grid container  >
                    <Grid item md={1}>
                    </Grid>
                    <Grid item md={10}>
                    <Grid container spacing={32}>
                        {
                            ads.length == 0 ? (
                                <div className="list-item list-item--messagea">
                                    <h1> This brands mobile phone not available </h1>
                                </div>
                            ) : ads.map((ads) =>
                                (
                                    <AdsList key={ads.id} {...ads} />
                                )
                            )
                        }
                        </Grid >
                    </Grid>
                    <Grid item md={1}>
                    </Grid>
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    // ads: state.ads  // ads from Index of Reducer file
    return {ads: state.filters.text ?  {ads:adsSelectorByText(state.ads, state.filters)} :state.ads}
};

export default connect(mapStateToProps, { getAdsByCategoty })(CategoryPage);

