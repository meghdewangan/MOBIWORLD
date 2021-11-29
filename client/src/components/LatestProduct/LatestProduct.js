import React from 'react';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, IconButton
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
// const LatestProduct = () => (
//     <div>

//         <h1>  LatestProduct Pages </h1>
//     </div>
// );

class LatestProduct extends React.Component {
    state = { expanded: false };
    
    componentDidMount() {
        console.log('Testing getData Function');
        
        this.props.getAds();
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="heroContent">
                <Grid container spacing={8}>

                    <Grid item md={4}>
                        <Card className="card">
                            <CardHeader
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className="media"
                                
                                image="./images/olx.png"
                                title="Contemplative Reptile"/>
                            
                       
                           
                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions className="actions" disableActionSpacing>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                </div>
            </div>
        );
    }
}
// export default LatestProduct;
const mapStateToProps = (state) => ({
    ads: state.ads  // ads from Index of Reducer file
});

export default connect(mapStateToProps, { getAds })(LatestProduct);