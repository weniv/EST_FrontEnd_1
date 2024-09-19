import React from 'react';
import styles from './Home.module.css';

export default function DiaryForm() {
    return (
        <form>
            <label className="a11y-hidden" for="diary-title">일기 제목</label>
            <input className="input-style" id="diary-title" type="text" placeholder="제목" required />

            <label className="a11y-hidden" for="diary-content">일기 내용</label>
            <textarea className={styles["diary-textarea"]} id="diary-content" placeholder="오늘의 비밀은 무엇인가요?"></textarea>
            <button className="black-btn" type="submit">작성하기</button>
        </form>
    )
}
