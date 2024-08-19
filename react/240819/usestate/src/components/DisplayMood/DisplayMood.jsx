import React from 'react'

export default function DisplayMood(props) {
    return (
        <div>
            <h2>{props.mood ? props.mood : "아직 선택하지 않았어요..."}</h2>
        </div>
    )
}