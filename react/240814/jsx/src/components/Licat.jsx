function Licat(myData) {
    console.log(myData);

    const name = '라이캣!';
    const someStyle = { backgroundColor: "black", color: "white" };
    return (
        <div>
            <h1 style={someStyle}>안녕, {myData.name} 1호</h1>{/* 이렇게하면 나옵니다. */}
            <h1>안녕, 라이캣 2호!</h1>
            <div className="newClass" /> {/* class대신 className=""로 진행! */}
        </div>
    )
}

export default Licat;