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
        buttonText: 'Properties',
        buttonImag: './images/house.svg',
        buttonLink: '/property',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Cars',
        buttonImag: './images/car.svg',
        buttonLink: '/vehicle',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Electronics',
        buttonImag: './images/computer.svg',
        buttonLink: '/electronics',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Furniture',
        buttonImag: './images/bed.svg',
        buttonLink: '/furniture',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Jobs',
        buttonImag: './images/job.svg',
        buttonLink: '/jobs',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Mobiles',
        buttonImag: './images/mobile.svg',
        buttonLink: '/mobiles',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Bikes',
        buttonImag: './images/bikes.svg',
        buttonLink: '/bikes',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Books,Sports',
        buttonImag: './images/book.svg',
        buttonLink: '/books',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Fashion',
        buttonImag: './images/fashion.svg',
        buttonLink: '/fashion',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Pets',
        buttonImag: './images/pet.svg',
        buttonLink: '/pets',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Services',
        buttonImag: './images/services.svg',
        buttonLink: '/service',
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
                    <Grid item  xs={6} sm={tier.title === 'Enterprise' ? 12 : 4} md={2}>
                        <Card>
                            <Link to={`/category${tier.buttonLink}`}>
                                <CardContent align="center" className="CardContent">
                                    <img src={tier.buttonImag} />
                                    <Typography color="textPrimary" gutterBottom>
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