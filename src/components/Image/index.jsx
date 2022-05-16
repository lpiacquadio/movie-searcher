import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IMAGE_SIZE, IMAGE_PLACEHOLDER } from '../../services/settings'
import styles from './Image.module.css'

export function Image({ src, alt, ariaLabel }) {
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
            className={styles.Image}
            key={url}
            src={url}
            alt={alt}
            width={width}
            height={height}
            onError={handleError}
            loading="lazy"
            aria-label={ariaLabel}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired
}
