const defaultState = {
    restaurants: [],
    searchRestaurantsError:null,
    allOrders: []
} 


const searchReducer = (state = defaultState, action)=>{
    switch (action.type) 
    {
        case "SEARCH_RESTAURANT_SUCCESS":
            return({
                ...state,
                restaurants: action.restaurants, 
                searchRestaurantsError: null
            })
        case "SEARCH_RESTAURANT_ERROR":
            return({
                ...state,
                restaurants: [], 
                searchRestaurantsError: action.searchRestaurantsError
            })
         case "GET_ALL_ORDERS_SUCCESS":
            return({
                ...state,
                allOrders: action.allOrders,
                getallOrdersError: action.getallOrdersError,
            })
        case "GET_ALL_ORDERS_SUCCESS":
            return({
                ...state,
                allOrders: [],
                getallOrdersError: action.getallOrdersError,
            })
        default:
            return state
    }
}

export default searchReducer;