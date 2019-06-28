import firebase from '../../config/firebase';

export const restaurantRegistration = (userData) =>{
    return(dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then((response) =>{
            let imgRef = firebase.storage().ref().child(`images/${Math.random().toString().substring(3, 10)}`);
                imgRef.put(userData.certificate)
                .then(()=>{
                    imgRef.getDownloadURL()
                    .then(url=>{
                        firebase.firestore().collection('users').doc(response.user.uid).set({
                            fullName: userData.fullName,
                            email: userData.email,
                            restaurantName: userData.restaurant,
                            country: userData.country,
                            city: userData.city,
                            uid: response.user.uid,
                            userType: "restaurant",
                            certificateURL: url,
                        })
                        .then(()=>{
                            dispatch({
                                type: "SIGNUP_SUCCESS", 
                                user: response.user,
                                error: null, 
                                userData:
                                {
                                    ...userData,
                                    userType: "restaurant",
                                    uid: response.user.uid
                                } 
                            })
                        })
                    })
                })
        })        
        .catch(error =>{
            dispatch({type: "SIGNUP_ERROR", error})
        })
    }
}

export const userRegistration = (userData) =>{
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then((response) =>{
            firebase.firestore().collection('users')
            .doc(response.user.uid)
            .set({
                fullName: userData.fullName,
                email: userData.email,
                gender: userData.gender,
                age: userData.age,
                country: userData.country,
                city: userData.city,
                uid: response.user.uid,
                userType: "user",
            })
            .then((resp) =>{
                console.log("Response", response);
                dispatch({
                    type: "SIGNUP_SUCCESS", 
                    user: response.user,  
                    userData:
                    {
                        ...userData,
                        userType: "restaurant",
                        uid: response.user.uid
                    } })
            })
        })
        .catch((error) =>{
            dispatch({ type: "SIGNUP_ERROR", signUpError: error})
        })
    }
}

export const signIn = (userData) =>{
    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
        .then((response) =>{
            firebase.firestore().collection('users')
            .doc(response.user.uid)
            .onSnapshot((doc) =>{
                    dispatch({type: "SIGNIN_SUCCESS", user: response.user, userData: doc.data() })
            },
            (error) =>{
                dispatch({ type: "SIGNIN_ERROR", signInError: error.message})
            })
        })
        .catch(error =>{
            dispatch({ type: "SIGNIN_ERROR", signInError: error.message})
        })
    }
}   
export const signOut = () =>{
    return(dispatch)=>{
        firebase.auth().signOut()
        .then(() =>{
            window.location.assign("/userlogin")
            dispatch({type: "SIGNOUT_SUCCESS"})
        })
        .catch((error) =>{
            dispatch({ type: "SIGNOUT_ERROR", signOutError: error})
        })
    }
}