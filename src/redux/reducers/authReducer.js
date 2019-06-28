const defaultState = {
    user: null,
    name: null,
    userType: null,
    isError: null,
    deleteBookingError: null,
}

const authReducer = (state = defaultState, action)=>{
    switch (action.type) 
    {
        case "SIGNUP_SUCCESS":
            return({
                ...state,
                user: action.user, 
                userData: action.userData,
                isError: false,
                signUpError: null,
            })
        case "SIGNUP_ERROR":
            return({
                ...state,
                signUpError: action.signUpError,
                userData: [],
                isError: true,
                user: null,
            })
        case "SIGNIN_SUCCESS":
            return({
                ...state,
                user: action.user, 
                userData: action.userData,
                signInError: null,
            })
        case "SIGNIN_ERROR":
            return({
                ...state,
                user: null,
                userData: null,
                signInError: action.signInError
            })
        case "SIGNOUT_SUCCESS":
            return({
                state: defaultState,
            })
        case "SIGNOUT_ERROR":
            return({
                ...state,
                signOutError: action.signOutError,
            })
        default:
            return state
    }
}

export default authReducer;