// Filter Reducer 
const filterReducerDefaultState = {
    text: '',
    category:''
    // sortBy: 'date', //date or amount
    // startDate: moment().startOf('month'),
    // endDate: moment().endOf('month')
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_CATEGORY':
            return {
                ...state,
                // sortBy: 'amount'
                category: action.category
            }
       
        
        default:
            return state;
    }
};

export default filterReducer;