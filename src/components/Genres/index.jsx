import React from 'react'
import PropTypes from 'prop-types'
import './Genres.css'

export function Genres({ values }) {
    return (
        <ul className="Genres">
            {values.map((genre, index) => (
                <li key={`${genre}_${index}`}>{genre}</li>
            ))}
        </ul>
    )
}

Genres.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired
}
