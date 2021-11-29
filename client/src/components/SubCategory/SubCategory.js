// import React, { Component } from 'react';


// const SubCategory = () => (
//     <div>

//         <h1> Sub Catagory Pages </h1>

//     </div>
// );

// export default SubCategory;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography
} from '@material-ui/core';

class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subCat: [],

        }
    }
    componentDidMount() {
        this.setState({
            subCat: this.props.subCat
        })
    }
    render() {
        return (
            <div>
                <div className="heroContent">
                
                    <Grid container spacing={8} className="catagory-grid" alignItems="flex-end">
                        {this.state.subCat.length == 0 ? '' : this.state.subCat.map((data, i) => (
                            
                            <Grid item key={data.title} xs={6} sm={4} md={2} key={i}>
                                <Card>
                               
                                    <Link to={`${data.link}`}>
                                        <CardContent align="center" className="CardContent">
                                            <img src={data.image} />
                                            <Typography color="textPrimary" gutterBottom>
                                                {data.name}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default SubCategory;
