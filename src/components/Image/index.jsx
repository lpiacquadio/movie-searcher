import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IMAGE_SIZE, IMAGE_PLACEHOLDER } from '../../services/settings'
import './Image.css'

export function Image({ src, alt }) {
    const width = IMAGE_SIZE.width
    const height = IMAGE_SIZE.height
    const fallbackUrl = `${IMAGE_PLACEHOLDER}/${width}x${height}`
    const [url, setUrl] = useState(src || fallbackUrl)
    const [error, setError] = useState(false)

    const handleError = () => {
        if (!error) {
            setError(true)
            setUrl(fallbackUrl)
        }
    }

    return (
        <img
            className="Image"
            key={url}
            src={url}
            alt={alt}
            width={width}
            height={height}
            onError={handleError}
            loading="lazy"
            aria-label="Show's portrait"
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}
