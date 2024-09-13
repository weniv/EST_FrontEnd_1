import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { appAuth } from "../firebase/config";

export const useSignup = () => {

    // 에러상태를 관리합니다.
    const [error, setError] = useState(null);

    // 통신상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);


    const signup = (email, password, displayName) => {
        setIsPending(true);

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // 현재 회원가입을 통해 로그인한 유저의 정보
                const user = userCredential.user;
                console.log(user);
                if (!user) {
                    throw new Error('회원가입에 실패했습니다.');
                }

                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        setIsPending(false);
                    }).catch((error) => {
                        setError(error);
                        console.error(error);
                        setIsPending(false);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                console.error(`에러코드 : ${errorCode}. ${error}`);
                setIsPending(false);
            });

    }

    return [error, isPending, signup]

}