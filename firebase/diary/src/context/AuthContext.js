import { createContext, useReducer, useState } from 'react';


const AuthContext = createContext();

// dispatch 를 통해서 호출할 리듀서 함수
const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        case 'authIsReady':
            return { ...state, user: action.payload, isAuthReady: true }
        default:
            return state;
    }
}


const AuthContextProvider = ({ children }) => {

    // const [value, setValue] = useState();
    const [state, dispatch] = useReducer(authReducer, { user: null, isAuthReady: false });

    console.log('context: ', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };