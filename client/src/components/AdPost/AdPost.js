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
        phone: "",
        email: "",
        aadhar: "",
        address: "",
        city: "",
        category: "",
        mobileName: "",
        description: "",
        imei: "",
        // priceNew: "",
        priceOld: "",
        old: "",

        // address: "",
        // city: "",
        // email: "",
        // phone: "",
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

        if (!this.state.name || !this.state.phone || !this.state.email
            || !this.state.aadhar || !this.state.address || !this.state.city
            || !this.state.category || !this.state.mobileName || !this.state.description
            || !this.state.imei || !this.state.old  ) {
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
            formData.append("name", state.name);
            formData.append("phone", state.phone);
            formData.append("email", state.email);
            formData.append("aadhar", state.aadhar);
            formData.append("address", state.address);
            formData.append("city", state.city);
            formData.append("category", state.category);
            formData.append("mobileName", state.mobileName);
            formData.append("userId", state.userId);

            formData.append("description", state.description);
            formData.append("imei", state.imei);
            // formData.append("priceNew", state.priceNew);
            formData.append("priceOld", state.priceOld);
            formData.append("old", state.old);

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
                            <h1>Add Details</h1>
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
                                        Mobile Number
                                    </InputLabel>
                                    <Input
                                        id="phone"
                                        type="text"
                                        value={this.state.phone}
                                        onChange={this.handleChange("phone")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Email
                                    </InputLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange("email")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Aadhar Number
                                    </InputLabel>
                                    <Input
                                        id="aadhar"
                                        type="text"
                                        value={this.state.aadhar}
                                        onChange={this.handleChange("aadhar")}
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
                                {/* <FormControl fullWidth className={classes.margin}>
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
                                </FormControl> */}
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
                                    <InputLabel htmlFor="category-simple">Mobile Brand Name</InputLabel>
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
                                        <MenuItem value="apple">Apple</MenuItem>
                                        <MenuItem value="oneplus">OnePlus</MenuItem>
                                        <MenuItem value="oppo">Oppo</MenuItem>
                                        <MenuItem value="vivo">Vivo</MenuItem>
                                        <MenuItem value="samsung">Samsung</MenuItem>
                                        <MenuItem value="xiaomi">Xiaomi</MenuItem>
                                        <MenuItem value="realme">Realme</MenuItem>
                                        <MenuItem value="honor">Honor</MenuItem>
                                        <MenuItem value="nokia">Nokia</MenuItem>
                                        <MenuItem value="poco">Poco</MenuItem>
                                        <MenuItem value="moto">Moto</MenuItem>
                                        <MenuItem value="panasonic">Panasonic</MenuItem>
                                        <MenuItem value="intex">Intex</MenuItem>
                                        <MenuItem value="micromax">Micromax</MenuItem>
                                        <MenuItem value="sony">Sony</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Selling Mobile Name/Model
                                    </InputLabel>
                                    <Input
                                        id="mobileName"
                                        type="text"
                                        // name=""
                                        value={this.state.mobileName}
                                        onChange={this.handleChange("mobileName")}
                                    />
                                </FormControl>
                                
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Description (Enter RAM, ROM, BATTERY BACKUP)
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
                                        IMEI Number
                                    </InputLabel>
                                    <Input
                                        id="imei"
                                        type="text"
                                        value={this.state.imei}
                                        onChange={this.handleChange("imei")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Price
                                    </InputLabel>
                                    <Input
                                        id="priceOld"
                                        type="text"
                                        value={this.state.priceOld}
                                        onChange={this.handleChange("priceOld")}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                     How many years old
                                    </InputLabel>
                                    <Input
                                        id="old"
                                        type="text"
                                        value={this.state.old}
                                        onChange={this.handleChange("old")}
                                    />
                                </FormControl>
                                {/* <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Address
                  </InputLabel>
                                    <Input
                                        id="address"
                                        type="text"
                                        value={this.state.address}
                                        onChange={this.handleChange("address")}
                                    />
                                </FormControl> */}
                                {/* <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        City
                  </InputLabel>
                                    <Input
                                        id="city"
                                        type="text"
                                        value={this.state.city}
                                        onChange={this.handleChange("city")}
                                    />
                                </FormControl> */}
                                {/* <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange("email")}
                                    />
                                </FormControl> */}
                                {/* <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">
                                        Phone
                  </InputLabel>
                                    <Input
                                        id="phone"
                                        type="text"
                                        value={this.state.phone}
                                        onChange={this.handleChange("phone")}
                                    />
                                </FormControl> */}
                                <FormControl
                                    fullWidth
                                    className={classNames(classes.margin, classes.textField)}
                                >
                                    <ReactDropzone accept="image/*" onDrop={this.onPreviewDrop}>
                                        Drop an mobile image, get a preview!
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

                                   <FormControl
                                    fullWidth
                                    className={classNames(classes.margin, classes.textField)}
                                >
                                    <ReactDropzone accept="image/*" onDrop={this.onPreviewDrop}>
                                        Drop an image of bill !
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
                                    Save
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