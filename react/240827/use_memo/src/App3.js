import React, { createContext } from 'react'
const UserInfo = createContext({ name: 'gary', id: 'garyisfree' });

const HelloLicat = () => {
    return (
        <>
            <UserInfo.Consumer>
                {(value) => {
                    return <div>
                        <h2>{value.name}</h2>
                        <strong>{value.id}</strong>
                    </div>
                }}
            </UserInfo.Consumer>
            <HelloLicatTwo />
        </>
    )
}

const HelloLicatTwo = () => {
    return (
        <UserInfo.Consumer>
            {(value) => {
                return (
                    <div>
                        <h2>{value.name}</h2>
                        <strong>{value.id}</strong>
                    </div>
                )
            }}
        </UserInfo.Consumer>
    )
}


export default function App3() {

    return (

        <HelloLicat />
    )
}
