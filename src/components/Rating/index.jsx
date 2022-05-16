import React from 'react'
import PropTypes from 'prop-types'
import styles from './Rating.module.css'

export function Rating({ value = 0 }) {
    let color = 'white'
    let backgroundColor = 'red'
    if (!value) {
        backgroundColor = 'black'
    } else if (value >= 4 && value < 6) {
        color = 'black'
        backgroundColor = 'yellow'
    } else if (value >= 6 && value < 8) {
        backgroundColor = 'blue'
    } else if (value >= 8) {
        backgroundColor = 'green'
    }
    return (
        <span
            className={styles.Rating}
            style={{ color, backgroundColor }}
            aria-label="Rating"
        >
            {value > 0 ? value : '?'}
        </span>
    )
}

Rating.propTypes = {
    value: PropTypes.number
}
