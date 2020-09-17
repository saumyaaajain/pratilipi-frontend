const checkIfTokenInLocalStorage = () => {
    if(localStorage.getItem("user") && localStorage.getItem("token")){
        return {
            isAuthenticated: true,
            user: JSON.parse(localStorage.getItem("user")),
            token: JSON.parse(localStorage.getItem("token"))
        }
    } else {
        return authInitialState
    }
}

const authInitialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

export {
    authInitialState,
    checkIfTokenInLocalStorage as authInit,
    reducer as authReducer
}
