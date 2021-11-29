import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import { AdsList, AdSearch } from '../../components/';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
import { logout } from '../../store/actions/authAction';
import { Grid, Button } from '@material-ui/core';
// import AdPost from '../../components'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class Dashbord extends React.Component {
  state = {
    value: 0,
    auth: this.props.auth.user
  };
  componentDidMount() {
    console.log('Testing getData Function');
    this.props.getAds();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    console.log('My User',this.state.auth._id);
    console.log('My Ads',this.props.ads);
    const { classes } = this.props;
    const { value } = this.state;
    let { ads } = this.props.ads;
    var fvlist = []
    ads.map((ads) => {
      this.state.auth.favourite.map((fv) => {

        if (fv == ads._id) {
          fvlist.push(ads)
        }
      })
      });

      let adLists = [];
    ads.map(ad=>{
     if(ad.userId == this.state.auth._id){
      adLists.push(ad);
     }
    
   });

      console.log('User wise data',adLists);
    return (
      <div className={classes.root}>
        <Button onClick={this.props.logout} variant="contained" color="default" style={{ color: "#ffffff", backgroundColor: "#93e84f" }}> Sign Out </Button>
        <AppBar position="static" >
          <Tabs value={value} onChange={this.handleChange} fullWidth >
            <Tab icon={<ChatIcon />} label="MESSAGE" />
            <Tab icon={<FavoriteIcon />} label="FAVORITES" />
            <Tab icon={<ShoppingBasket />} label="AD POST" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>
          <Grid container> {
            fvlist.length == 0 ? (
              <div className="list-item list-item--messagea">
                <h1>No Favorite </h1>
              </div>
            ) : fvlist.map((ads) =>
              (
                <AdsList key={ads.id} {...ads} />

              )
             )
          }</Grid>
        </TabContainer>}
        {value === 2 && <TabContainer><Grid container> {
            adLists.length == 0 ? (
              <div className="list-item list-item--messagea">
                <h1>No Favorite </h1>
              </div>
            ) : adLists.map((ads) =>
              (
                <AdsList key={ads.id} {...ads} />

              )
             )
          }</Grid></TabContainer>}

      </div>
    );
  }
}

Dashbord.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Dashbord);


const mapStateToProps = (state) => ({
  auth: state.auth,
  ads: state.ads
});

export default connect(mapStateToProps, { getAds,logout })(withStyles(styles)(Dashbord));