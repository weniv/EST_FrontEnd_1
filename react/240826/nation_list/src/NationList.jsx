import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// const nations = [];

const Item = styled.div`
    margin: 60px auto;
    max-width: 300px;
    h3{
        margin: 0 0 20px 0;
    }
    ul{
        list-style: none;
        padding: 10px;
    }

    li{
        border: 1px solid lightgrey;
        padding: 10px;
        box-shadow: 4px 4px 6px rgba(0,0,0, 0.05);
        border-radius: 10px;
        margin: 20px 0;
    }
`



export default function NationList() {
    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/nations');

    // useEffect(() => {
    //     fetch('http://localhost:3000/nations')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error();
    //             }
    //             return response.json();
    //         })
    //         .then(json => {
    //             console.log(json);
    //             return setNations(json);
    //         })
    //         .catch(error => console.error('데이터를 가져오는데 문제가 발생했습니다!', error));
    // }, []);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error();
                }

                const json = await response.json();

                console.log(json);
                setNations(json);
            } catch (err) {
                console.error('데이터를 가져오는데 문제가 발생했습니다!', err);
            }
        }

        fetchData();
    }, [url]);


    return (
        <Item>
            <h2>나라 목록</h2>
            <ul>
                {nations.map((nation) => {
                    return <li key={nation.id}>
                        <h3>{nation.title}</h3>
                        <span>{nation.population}</span>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={() => { setUrl('http://localhost:3000/nations') }}>전체목록</button>
                <button onClick={() => { setUrl('http://localhost:3000/nations?loc=europe') }}>유럽목록</button>
            </div>
        </Item>
    )
}
