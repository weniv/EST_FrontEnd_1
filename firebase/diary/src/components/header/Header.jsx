import React from 'react'
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/logo.svg';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Header() {
    const [logout] = useLogout();
    const { user } = useAuthContext();
    const location = useLocation();

    return (
        <header>
            <div className={styles["header-wrap"]}>
                <h1>
                    <Link to="/">
                        <img className={styles.logo} src={logo} alt="두근두근 비밀일기" />
                    </Link>
                </h1>
                <div>
                    {!user && (
                        <>
                            {
                                // 유저 정보가 없고, 회원가입 화면이라면 로그인 버튼을, 로그인 화면 이라면 회원가입 버튼을 노출합니다.
                                location.pathname === "/signup" ? <Link to="/login" className="btn-login">로그인</Link> : <Link to="/signup" className="btn-join">회원가입</Link>
                            }
                        </>
                    )}
                    {user && (

                        // 유저 정보가 없고, 회원가입 화면이라면 로그인 버튼을, 로그인 화면 이라면 회원가입 버튼을 노출합니다.
                        <>
                            <p className="hello">환영합니다 <strong>{user.displayName}</strong>님!</p>
                            <Link to="/" className="btn-join" onClick={logout}>로그아웃</Link>
                        </>

                    )}


                </div>
            </div >
        </header >
    )
}
