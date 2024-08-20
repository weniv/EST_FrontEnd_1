
function App3() {
    return (
        <Hello name="lica" />
    );
}

function Hello(props) {
    console.log(props);


    const name = props.name;
    if (name) {
        return <One name={name} />
    } else {
        return <Two />
    }
}

function One(props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

function Two() {
    return (
        <div>
            <h1>name이 입력된 것이 없습니다.</h1>
        </div>
    )
}

export default App3;