import React from 'react';
import logo from '../../images-law/weniv.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="cont-footer">
            <img src={logo} alt="weniv" className="img-footer" />
            <p className="txt-footer">&#8251; 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.</p>
            <p className="txt-footer">수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
        </footer>
    )
}
