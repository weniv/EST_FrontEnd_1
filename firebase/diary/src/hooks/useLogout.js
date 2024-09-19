
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useAuthContext } from './useAuthContext';


export const useLogout = () => {

    // 에러상태를 관리합니다.
    const [error, setError] = useState(null);

    // 통신상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    // 전역 context 에서 dispatch 함수를 받아옵니다.
    const { dispatch } = useAuthContext();

    const logout = () => {
        setIsPending(true);

        signOut(appAuth).then(() => {
            dispatch({ type: 'logout' });
            setIsPending(false);
            setError(null);
        }).catch((error) => {

            setIsPending(false);
            setError(error.message);
            console.error(error.message);
        });
    }

    return [logout, error, isPending];
}