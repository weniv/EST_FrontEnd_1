import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase/config";


export const useLogin = () => {
    // 에러상태를 관리합니다.
    const [error, setError] = useState(null);

    // 통신상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    // 전역 context 에서 dispatch 함수를 받아옵니다.
    const { dispatch } = useAuthContext();


    const login = (email, password) => {
        setIsPending(true);

        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch({ type: 'login', payload: user });
                setIsPending(false);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                console.error(error.message);
                setIsPending(false);
            });

    }
    return [login, isPending, error]
}