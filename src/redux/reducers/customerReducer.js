const defaultState = {
    itemsOrderError:null
} 


const customerReducer = (state = defaultState, action)=>{
    switch (action.type) 
    {
        case "ITEMS_ORDER_SUCCESS":
            return({
                ...state,
                itemsOrderError: action.itemsOrderError,
            })
        case "ITEMS_ORDER_ERROR":
            return({
                ...state,
                itemsOrderError: action.itemsOrderError
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
        case "SET_STATUS_SUCCESS":
            return({
                ...state,
                setStatusError: null
            })   
        case "SET_STATUS_ERROR":
            return({
                ...state,
                setStatusError: action.setStatusError
            })    

        default:
            return state
    }
}

export default customerReducer;