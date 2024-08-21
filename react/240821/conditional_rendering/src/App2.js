import React from "react";
import Question from "./Question";
import './App2.css';

const App2 = () => {
    return (
        <>
            <nav className="box">
                <ul>
                    <li id="detail" className="text">
                        상세정보
                    </li>
                    <li id="qa" className="text">
                        Q&A
                    </li>
                    <li id="review" className="text">
                        Review
                    </li>
                </ul>
            </nav>
            <Question />
        </>
    );
};

export default App2;