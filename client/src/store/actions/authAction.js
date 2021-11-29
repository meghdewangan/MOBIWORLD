import { toast } from 'react-toastify';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

// **** SIGNIN **** //
// export const startLogin = () => {
//     return () => {
//         return firebase.auth().signInWithPopup(googleAuthProvider);
//     };
// };

export const startLogin = (data) => dispatch => {
    // dispatch(setItemsLoading());

    fetch("/api/users/login", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(response => {
            console.log("Success:", response.user)
            dispatch({
                type: 'LOGIN',
                payload: response.user
            });
            toast("Login Successfully!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
            // this.props.history.push("/dashbord");
        })
        .catch(error => {
            toast("Invalid User Name and Password!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
            console.log("Error:", error);
        });
};




// **** LOGOUT **** //
// export const startLogout = () => {
//     return () => {
//         return firebase.auth().signOut();
//     };
// };

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setAdsLoading = () => ({
    type: 'ADS_LOADING',
});