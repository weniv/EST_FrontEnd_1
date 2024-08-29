import React from 'react';
import ImageItem from './ImageItem';

export default function ImageList({ imageList }) {
    return (
        <ul>
            {imageList.map((imageInfo) => {
                console.log(imageInfo);
                return (
                    imageInfo && <li key={imageInfo.id}><ImageItem imageInfo={imageInfo} /></li>
                )
            })}
        </ul>
    )
}
