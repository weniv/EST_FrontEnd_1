import Licat from "./components/Licat";
import Time from "./components/Time";
import ColorText from "./components/ColorText";
import { useState } from "react";


function App4() {
    // let like = 0;
    const [like, setLike] = useState(0);
    // const like = useState(0)[0];
    // const setLike = useState(0)[1];

    function clickLike() {
        like += 1;
        console.log(like);
    }

    return (
        <div>
            <Licat name="gary" age={10} />
            <Time />
            <ColorText color="red" />
            <ColorText color="teal" />
            <ColorText color="pink" />
            <ColorText color="skyblue" />
            <button onClick={clickLike}>버튼입니다. {like}</button>
        </div>
    );
}

export default App4;