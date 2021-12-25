const express = require('express');
const router = express.Router();
var multer = require('multer');


// Ad Model
const { AdModel } = require('../../db/models/adModel');
const { User } = require('../../db/models/userModel');
// ** Code for Upload Image from Form **//
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //   cb(null, 'client/build/static/media/');
        cb(null, 'client/public/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage });

// @route   GET api/ads
// @desc    Get All Ads
// @access  Public
router.get('/', (req, res) => {


    AdModel.find()
        .sort({ created_date: 'desc' })
        .then(ads => res.json(ads));
});

// @route   GET api/ads
// @desc    Get Ads By Id
// @access  Public
router.get('/item/:id', (req, res) => {
    console.log(req.params.id);

    AdModel.find({ _id: req.params.id })
        .sort({ created_date: 'desc' })
        .then(ads => res.json(ads));
});

// @route   GET api/ads
// @desc    Get Ads By Category
// @access  Public
router.get('/category/:category', (req, res) => {
    console.log(req.params.category);

    AdModel.find({ category: req.params.category })
        .sort({ created_date: 'desc' })
        .then(ads => res.json(ads));
});

// @route   POST api/ads
// @desc    Creat A Post
// @access  Public
router.post('/', upload.single("file"), (req, res) => {
    let file = req.file.filename;

    console.log(file)

    const newAd = new AdModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        aadhar: req.body.aadhar,
        address: req.body.address,
        city: req.body.city,
        category: req.body.category,
        mobileName: req.body.mobileName,
        description: req.body.description,
        imei: req.body.imei,
        priceOld: req.body.priceOld,
        old: req.body.old,
        userId: req.body.userId,
        file: file

    });

    newAd.save().then((doc) => {
        res.json(doc);
        console.log('Save Data', doc);
    }, (e) => {
        console.log('Unable to Save data', e);
    });
});


// @route   POST api/ads
// @desc    Creat A Favourite
// @access  Public
router.post('/favourite', (req, res) => {
    // const newAd = User({
    //     favourite: req.body.favourite,
    // });
    //console.log("Hello", req.body);
    var myquery = { _id: req.body.userId };
    var newvalues = { $push: { favourite: req.body.productId } };
    var unFav = { $pull: { favourite: req.body.productId } };

    User.findOne({ _id:req.body.userId,'favourite': req.body.productId }, (err, favMatch) => {
        console.log("favorite record",req.body.productId)

        console.log("favorite record",favMatch)
        if (favMatch) {
            console.log("unfv")
            User.update(myquery, unFav).then((err, upd, doc) => {
                res.json( doc);
               // res.end()
                // console.log('Save Data', doc);
            })
                .catch((err) => {
                    res.json(err)
                   // res.end()
                })
        }
        else {
            console.log("fv")
            User.update(myquery, newvalues).then((doc) => {
                res.json(doc);
                console.log('Save Data', doc);
            });
        }
    })
});


module.exports = router;