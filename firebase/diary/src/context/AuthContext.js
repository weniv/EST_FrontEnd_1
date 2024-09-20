import { createContext, useEffect, useReducer, useState } from 'react';
import { appAuth } from '../firebase/config';


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


    const [state, dispatch] = useReducer(authReducer, { user: null, isAuthReady: false });

    // 유저의 로그인 상태를 관찰하는 옵저버를 붙입니다.
    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged((user) => {
            dispatch({ type: 'authIsReady', payload: user });
        })

        return () => {
            unsubscribe();
        }

    }, []);


    console.log('context: ', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };