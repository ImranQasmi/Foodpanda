import firebase from '../../config/firebase';


export const searchRestaurantByText = (searchText) =>{
    let restaurants = [];
    return(dispatch) =>{
        firebase.firestore().collection("product").orderBy("rating", 'desc')
        .onSnapshot(snapShot =>{
            restaurants = [];
            snapShot.forEach(doc =>{
                if((doc.data().productname).toLowerCase().indexOf(searchText) != -1)
                {
                    console.log(doc.data())
                    restaurants.push({...doc.data(), id: doc.id});
                }
            })
            dispatch({type: "SEARCH_RESTAURANT_SUCCESS", restaurants })
        }, (error) =>{
            dispatch({type: "SEARCH_RESTAURANT_ERROR", searchRestaurantsError: error.message })
        })
    }
}

export const getAllOrders = (id) =>{
    let allOrders = []
    return(dispatch) =>{
        firebase.firestore().collection('orders').where("restaurantId", "==", id)
        .onSnapshot((snapShot) =>{
            allOrders = [];
            snapShot.forEach(doc =>{
                allOrders.push({...doc.data(), id: doc.id})
            })
            dispatch({ type: "GET_ALL_ORDERS_SUCCESS", allOrders, getallOrdersError: null });
        }, (error =>{
            dispatch({ type: "GET_ALL_ORDERS_ERROR", getallOrdersError: error})
        })
        )
    }
}


export const handleOrderStatus = (data) =>{
    return(dispatch) =>{
        firebase.firestore().collection('orders').doc(data.id).update({
            status: data.status
        })
        .then(() =>{
            dispatch({ 
                type: "SET_STATUS_SUCCESS" 
            });
        })
        .catch((error) =>{
            dispatch({ 
                type: "SET_STATUS_ERROR", 
                setStatusError: error.message
            })
        })
    }
}