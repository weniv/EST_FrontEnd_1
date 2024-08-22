import React, { useRef, useEffect } from 'react';
import licat from '../../images-law/licat.png';
import './Modal.css';

export default function Modal({ modalShow, modalClose }) {

    const dialogRef = useRef();

    useEffect(() => {
        if (modalShow) {
            // 모달 랜더링해!
            dialogRef.current.showModal();
        } else {
            // 모달 들어가!
            dialogRef.current.close();
        }
    }, [modalShow]);

    return (
        <dialog id="modal" ref={dialogRef}>
            <form className="modal-wrap" method="dialog">
                <h2>화이팅!!♥♥♥</h2>
                <h3>당신의 꿈을 응원합니다!</h3>
                <img src={licat} alt="라이캣의 응원" />
                <button className="btn-close" onClick={modalClose}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
                <p>(그냥 닫기 버튼입니다.)</p>
            </form>
        </dialog>
    )
}
