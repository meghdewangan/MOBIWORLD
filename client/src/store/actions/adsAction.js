import { GET_ADS, GET_ADS_BY_CATEGORY, GET_ADS_BY_ID,ADD_AD, DELETE_AD, ADS_LOADING } from '../actions/types';



// ** GET ALL ADS ** //
export const getAds = () => dispatch => {
    dispatch(setAdsLoading());
    fetch('/api/ads', {
        // body: {category:category},
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(adsList => {
            dispatch({
                type: GET_ADS,
                payload: adsList
            })
        });
};


// ** GET ADS BY CATEGORY **//
export const getAdsByCategoty = (category) => dispatch => {
    dispatch(setAdsLoading());
    fetch('/api/ads/category/' + category, {
        
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => {

            console.log(res);
            return res.json();
        })
        .then(adsList => {
            dispatch({
                type: GET_ADS_BY_CATEGORY,
                payload: adsList
            })
        });
};

// ** GET ADS BY ID **//
export const getAdsById = (id) => dispatch => {
    dispatch(setAdsLoading());
    fetch('/api/ads/item/' + id, {
        
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => {

            console.log(res);
            return res.json();
        })
        .then(adsList => {
            dispatch({
                type: GET_ADS_BY_ID,
                payload: adsList
            })
        });
};

export const setAdsLoading = () => ({
    type: ADS_LOADING,
});