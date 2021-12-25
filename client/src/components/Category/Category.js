import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Category.css';




const tiers = [
    {
        buttonText: 'Apple',
        buttonImag: './images/apple.png',
        buttonLink: '/apple',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'OnePlus',
        buttonImag: './images/oneplus.png',
        buttonLink: '/oneplus',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Oppo',
        buttonImag: './images/oppo.png',
        buttonLink: '/oppo',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Vivo',
        buttonImag: './images/vivo.png',
        buttonLink: '/vivo',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Samsung',
        buttonImag: './images/samsung.png',
        buttonLink: '/samsung',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Xiaomi',
        buttonImag: './images/xiaomi.png',
        buttonLink: '/xiaomi',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Realme',
        buttonImag: './images/realme.png',
        buttonLink: '/realme',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Honor',
        buttonImag: './images/honor.png',
        buttonLink: '/honor',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Nokia',
        buttonImag: './images/nokia.png',
        buttonLink: '/nokia',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Poco',
        buttonImag: './images/poco.png',
        buttonLink: '/poco',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Moto',
        buttonImag: './images/moto.png',
        buttonLink: '/moto',
        buttonVariant: 'outlined',
    },
    // {
    //     buttonText: 'LG',
    //     buttonImag: './images/lg.svg',
    //     buttonLink: '/lg',
    //     buttonVariant: 'outlined',
    // },
    {
        buttonText: 'Panasonic',
        buttonImag: './images/panasonic.png',
        buttonLink: '/panasonic',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Intex',
        buttonImag: './images/intex.png',
        buttonLink: '/intex',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Micromax',
        buttonImag: './images/micromax.png',
        buttonLink: '/micromax',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Sony',
        buttonImag: './images/sony.png',
        buttonLink: '/sony',
        buttonVariant: 'outlined',
    },

];

const Category = () => {
   

    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
                
            <Grid container spacing={8}  alignItems="flex-end">
                {tiers.map(tier => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid item lg={4} xs={12} sm={tier.title === 'Enterprise' ? 12 : 4} md={2}>
                        <Card>
                            <Link to={`/category${tier.buttonLink}`}>
                                <CardContent align="center" className="CardContent">
                                    <img style={{height: '200px'}} src={tier.buttonImag} />
                                     <Typography color="textPrimary" style={{fontSize: '2em'}}  gutterBottom> 
                                        {tier.buttonText}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>



        </React.Fragment>
    );
}


export default Category;