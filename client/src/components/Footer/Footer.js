import React,{Fragment} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    AppBar,Button,Card,Paper, CardMedia, Collapse,
    CardActions,CardContent,CardHeader,CssBaseline,
    Grid,Toolbar,Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Footer.css';

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Loctions'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    CardContent: {
        padding: '10px',
        '&:hover': {
            background: 'lightgreen'
        }
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },

    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});
const Footer = (props)=>{
    const { classes } = props;

    return (
    
    <footer >
    <Grid container className="box-layout_Footer"> 

    
        {/* {footers.map(footer => (
            <Grid item xs key={footer.title}>
                <Typography variant="title" color="textPrimary" gutterBottom>
                    {footer.title}
                </Typography>
                {footer.description.map(item => (
                    <Typography key={item} variant="subheading" color="textSecondary">
                        {item}
                    </Typography>
                ))}
            </Grid>
        ))} */}
        {/* <Grid item sm={12} md={12} xs={12}><img src="./images/footerBanner.png"/></Grid> */}
     </Grid>
</footer>

)}
export default Footer;