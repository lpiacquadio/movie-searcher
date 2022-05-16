import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image } from '../Image'
import styles from './Show.module.css'

export function Show({ id, thumbnail, title, description }) {
    return (
        <Link to={`/${id}`} className={styles.Show} aria-label="Show">
            <Image
                src={thumbnail}
                alt={title}
                ariaLabel="Show's portrait"
            />
            <h4>{title}</h4>
            <div
                className={styles['Show-description']}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </Link>
    )
}

Show.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}
