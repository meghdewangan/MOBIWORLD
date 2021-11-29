import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ReactDropzone from 'react-dropzone'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing.unit
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3
    },
    textField: {
        flexBasis: 200
    },
    container: {
        display: "flex",
        justifyContent: "center",
        maxWidth: "1080px",
        margin: "0 auto"
    },
    paper: {
        padding: "20px 30px 50px 15px",
        margin: "100px auto 30px"
    }
});

class AdPost extends React.Component {
    state = {
        name: "",
        title: "",
        category: "",
        description: "",
        price: "",
        address: "",
        city: "",
        email: "",
        phone: "",
        files: [],
        imagePreviewUrl: "",
        error: "",
        userId: this.props.auth.user._id,
        showPassword: false
    };
    success = () => {
        toast.success("Add Post !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
    }

    error = () => {
        toast.error("Not Add Post!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
    }

    onPreviewDrop = files => {
        this.setState({
            files: this.state.files.concat(files)
        });
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    _handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        const state = this.state;

        if (!this.state.name || !this.state.title || !this.state.category
            || !this.state.description || !this.state.price || !this.state.address
            || !this.state.city || !this.state.email || !this.state.phone) {
            this.setState({
                error: "Please fill all the feilds correctly"
            });
        }
        else {
            // let data = {
            //     name: this.state.name,
            //     title: this.state.title,
            //     category: this.state.category,
            //     description: this.state.description,
            //     price: this.state.price,
            //     address: this.state.address,
            //     city: this.state.city,
            //     email: this.state.email,
            //     phone: this.state.phone,
            //     file: this.state.files[0]
            // };
            var formData = new FormData();
            formData.append("title", state.title);
            formData.append("category", state.category);
            formData.append("description", state.description);
            formData.append("address", state.address);
            formData.append("price", state.price);
            formData.append("name", state.name);
            formData.append("email", state.email);
            formData.append("city", state.city);
            formData.append("userId", state.userId);

            formData.append("phone", state.phone);
            formData.append("file", state.files[0]);


            var url = "/api/ads";

            fetch(url, {
                method: "POST", // or 'PUT'
                body: formData, // data can be `string` or {object}!
            })
                .then(res => res.json())
                .then(response => {
                    console.log("Success:");
                    this.success();
                    // this.props.history.push("/login");
                })
                .catch(error => {
                    console.error("Error:", error)
                    this.error();
                });
        }
    };

    render() {
        console.log('My User1:',this.props.auth.user._id);
        const { classes } = this.props;

        return (
            <Grid className={classes.container} container>
                <Grid item xs={12} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <div className={classes.root}>
                            <h1>Add New Ads</h1>
                            <form onSubmit={this._handleSubmit} >
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Name
                                    </InputLabel>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange("name")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Title
                                    </InputLabel>
                                    <Input
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.handleChange("title")}
                                    />
                                </FormControl>
                                {/* <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Category
                                    </InputLabel>
                                    <Input
                                        id="category"
                                        type="text"
                                        value={this.state.category}
                                        onChange={this.handleChange("category")}
                                    />
                                </FormControl> */}
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="category-simple">Category</InputLabel>
                                    <Select
                                        value={this.state.category}
                                        onChange={this.handleChange("category")}
                                        inputProps={{
                                            name: 'category',
                                            id: 'category',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="property">Property</MenuItem>
                                        <MenuItem value="vehicle">Vehicle</MenuItem>
                                        <MenuItem value="electronics">Electronics</MenuItem>
                                        <MenuItem value="furniture">Furniture</MenuItem>
                                        <MenuItem value="jobs">Jobs</MenuItem>
                                        <MenuItem value="mobiles">Mobiles</MenuItem>
                                        <MenuItem value="bikes">Bikes</MenuItem>
                                        <MenuItem value="books">Books</MenuItem>
                                        <MenuItem value="fashion">Fashion</MenuItem>
                                        <MenuItem value="pets">Pets</MenuItem>
                                        <MenuItem value="service">Services</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Description
                  </InputLabel>
                                    <Input
                                        id="description"
                                        type="text"
                                        value={this.state.description}
                                        onChange={this.handleChange("description")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Price
                  </InputLabel>
                                    <Input
                                        id="price"
                                        type="text"
                                        value={this.state.price}
                                        onChange={this.handleChange("price")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Address
                  </InputLabel>
                                    <Input
                                        id="address"
                                        type="text"
                                        value={this.state.address}
                                        onChange={this.handleChange("address")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        City
                  </InputLabel>
                                    <Input
                                        id="city"
                                        type="text"
                                        value={this.state.city}
                                        onChange={this.handleChange("city")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange("email")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Phone
                  </InputLabel>
                                    <Input
                                        id="phone"
                                        type="text"
                                        value={this.state.phone}
                                        onChange={this.handleChange("phone")}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={classNames(classes.margin, classes.textField)}
                                >
                                    <ReactDropzone accept="image/*" onDrop={this.onPreviewDrop}>
                                        Drop an image, get a preview!
                                </ReactDropzone>
                                </FormControl>
                                {this.state.files.length > 0 && <h3>Previews</h3>}{" "}
                                {this.state.files.map(file => (
                                    <img
                                        src={file.preview}
                                        key={file.preview}
                                        alt="Preview"
                                        width="100px"
                                        style={{ padding: "20px", marginBottom: "20px" }}
                                    />
                                ))}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                >
                                    Save Ad
                </Button>
                                {this.state.error && (
                                    <p style={{ color: "red" }}>{this.state.error}</p>
                                )}
                            </form>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} />
            </Grid>
        );
    }
}

AdPost.propTypes = {
    classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(withRouter(AdPost));

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withStyles(styles)(AdPost));