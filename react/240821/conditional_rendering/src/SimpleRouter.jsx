import React from 'react';
import LoadingSpinner from './LoadingSpinner';


const AdminView = () => <div>관리자 화면</div>;
const UserView = () => <div>일반 유저 화면</div>;
const GuestView = () => <div>게스트 화면</div>;


export default function SimpleRouter({ userRole, isLoading }) {

    if (isLoading) {
        return <LoadingSpinner />
    }

    switch (userRole) {
        case 'admin':
            return <AdminView />;
        case 'user':
            return <UserView />;
        case 'guest':
            return <GuestView />;
        default:
            return '뭔가 에러가 발생했습니다.'
    }
}
