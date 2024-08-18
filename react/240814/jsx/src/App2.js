import './App2.css';


const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

function TripList() {

    const items = list.map((item) => {
        return (
            <li key={item.no} className={item.visited ? 'active' : null}>{item.area}</li>
        )
    });

    return (
        <ul className='list-area'>
            {items}
            {/* <li className={list[0].visited ? 'active' : null}>{list[0].area}</li>
            <li className={list[1].visited ? 'active' : null}>{list[1].area}</li>
            <li className={list[2].visited ? 'active' : null}>{list[2].area}</li>
            <li className={list[3].visited ? 'active' : null}>{list[3].area}</li> */}
        </ul>
    )
}

function App2() {
    return (
        <TripList />
    );
}

export default App2;