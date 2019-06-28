import firebase from '../../config/firebase';

export const itemsOrder = (data) =>{
    return(dispatch) =>{
        firebase.firestore().collection('orders').add({
            itemsId: data.id,
            price: data.price,
            restaurantId: data.restaurantId,
            userId: data.userId,
            image: data.image,
            productname: data.productname,
            resturantname: data.resturantname,
            status: 'pending',
        })
        .then(()=>{
            alert("Successfully submitted");
            dispatch({ type: "ITEMS_ORDER_SUCCESS", itemsOrderError: null})
        })
        .catch((error) =>{
            dispatch({ type: "ITEMS_ORDER_ERROR", itemsOrderError: error.message})
        })
    }
}

export const getAllOrders = (uid) =>{
    let allOrders = []
    return(dispatch) =>{
        firebase.firestore().collection('orders').where("userId", "==", uid)
        .onSnapshot((snapShot) =>{
            allOrders = [];
            snapShot.forEach(doc =>{
                console.log("Hellow")
                allOrders.push({...doc.data(), id: doc.id})
            })
            dispatch({ type: "GET_ALL_ORDERS_SUCCESS", allOrders, getallOrdersError: null });
        }, (error =>{
            dispatch({ type: "GET_ALL_ORDERS_ERROR", getallOrdersError: error.message})
        })
        )
    }
}
