import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../Image'
import styles from './ListOfImages.module.css'

export function ListOfImages({ images }) {
    if (!(images && images.length)) return ''
    return (
        <div className={styles.ListOfImages}>
            {images.map((src, index) => (
                <Image
                    key={`image_${index}`}
                    src={src}
                    ariaLabel={`Show's image #${index}`}
                />
            ))}
        </div>
    )
}

ListOfImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
}
