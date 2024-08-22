import React from 'react'
import title from '../../images-law/title.png';
import subtitle from '../../images-law/txt_subtitle.png';
// import './Header.module.css';
import styles from './Header.module.css';

export default function Header(props) {
    return (
        <header>
            <h1 className={styles['tit-law']}>
                <img src={title} alt="1만 시간의 법칙" className={styles["img-tit"]} />
            </h1>
            <img src={subtitle} alt="연습은 어제의 당신보다 당신을 더 낫게 만든다." className={styles["img-txt"]} />
            <p className={styles["txt-desc"]} val={props}>
                <strong className={styles["tit-desc"]}>1만 시간의 법칙</strong>은<br />
                어떤 분야의 전문가가 되기 위해서는<br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </p>
        </header>
    )
}
