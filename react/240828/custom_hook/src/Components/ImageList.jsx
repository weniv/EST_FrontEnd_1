import React from 'react';
import ImageItem from './ImageItem';

export default function ImageList({ imageList }) {
    return (
        <ul>
            {imageList.map((imageInfo) => {
                return (
                    <li key={imageInfo.id}>
                        {imageInfo && <ImageItem imageInfo={imageInfo} />}
                    </li>
                )
            })}
        </ul>
    )
}
