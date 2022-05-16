import React from 'react'
import PropTypes from 'prop-types'
import styles from './Genres.module.css'

export function Genres({ values }) {
    return (
        <ul className={styles.Genres}>
            {values.map((genre, index) => (
                <li key={`${genre}_${index}`}>{genre}</li>
            ))}
        </ul>
    )
}

Genres.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired
}
