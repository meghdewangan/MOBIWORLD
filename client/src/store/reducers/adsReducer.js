import { GET_ADS,GET_ADS_BY_CATEGORY, GET_ADS_BY_ID, ADD_AD, DELETE_AD, ADS_LOADING } from '../actions/types';

//Ads Reducer
const adsReducerDefaultState = {
    ads:[],
    loading:false
}
const adsReducer = (state = adsReducerDefaultState, action) => {
    
    switch (action.type) {
        case GET_ADS:
            return {...state,
                    ads:action.payload,
                    loading:false
            };
        case GET_ADS_BY_CATEGORY:
            return {...state,
                    ads:action.payload,
                    loading:false
            };

            case GET_ADS_BY_ID:
            return {...state,
                    ads:action.payload,
                    loading:false
            };
        // case 'ADD_AD':
        //     return [...state, action.expense];
        // case 'DELETE_AD':
        //     return state.filter(
        //         ({ id }) => (id !== action.id)
        //     )
        // case 'EDIT_EXPENSE':
        //     return state.map(
        //         (expense) => {
        //             if (expense.id === action.id) {
        //                 return { ...expense, ...action.updates }
        //             }
        //             else {
        //                 return expense;
        //             }
        //         }
        //     );
        case ADS_LOADING:
        return {
            ...state,
            loading:true
        }
        default:
            return state;
    }

};

export default adsReducer;