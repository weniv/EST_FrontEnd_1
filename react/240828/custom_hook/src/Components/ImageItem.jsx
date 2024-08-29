import React from 'react'

export default function ImageItem({ imageInfo }) {
    return (
        <img style={{ width: '200px', height: 'auto' }} src={imageInfo.download_url} alt={imageInfo.author} />
    )
}
