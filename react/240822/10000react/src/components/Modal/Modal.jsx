import React from 'react';
import licat from '../../images-law/licat.png';
import './Modal.css';

export default function Modal() {
    return (
        <dialog id="modal">
            <form className="modal-wrap" method="dialog">
                <h2>화이팅!!♥♥♥</h2>
                <h3>당신의 꿈을 응원합니다!</h3>
                <img src={licat} alt="라이캣의 응원" />
                <button className="btn-close">종료하고 진짜 훈련하러 가기 GO!GO!</button>
                <p>(그냥 닫기 버튼입니다.)</p>
            </form>
        </dialog>
    )
}
