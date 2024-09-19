import React from 'react';
import DiaryForm from './DiaryForm';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <h2 className={styles.heart}>2023.02.27의 비밀일기</h2>
                <DiaryForm />
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>

                    {/* <li>
                        <article className="diary-article">
                            <h3 className="article-title">이는 청춘의 것은 그들의 운다.</h3>
                            <time className="article-time" datetime="2023-03-15">2023.02.24.THU</time>
                            <p className="article-content">이는 청춘의 것은 그들의 운다. 동산에는 수 것이 있는 뼈 이상의 쓸쓸하랴? 없으면, 날카로우나 뛰노는 풀이 아니다. 황금시대를 무한한 따뜻한
                                청춘이
                                같으며, 속잎나고, 운다. 위하여서 커다란
                                영락과 따뜻한 피고
                                안고, 뼈 봄바람이다. 가는 곧 아니한 눈에 얼마나 있음으로써 지혜는 대한 얼마나 봄바람이다. 때까지 위하여 가지에 열락의 것이다. 그림자는 꽃이 천하를 우리 찬미를 원대하고, 인생을 때에,
                                황금시대다. 목숨을
                                할지니, 청춘은 용기가 말이다.</p>
                            <div className="button-group">
                                <button type="button">
                                    <img src="./img/icon-edit.svg" alt="수정">
                                </button>
                                <span></span>
                                <button type="button">
                                    <img src="./img/icon-delete.svg" alt="삭제">
                                </button>
                            </div>
                        </article>
                    </li> */}

                </ul>
            </section>
        </div>
    )
}
