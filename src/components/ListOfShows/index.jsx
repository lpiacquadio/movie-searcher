import React from 'react'
import PropTypes from 'prop-types'
import { Show } from '../Show'
import styles from './ListOfShows.module.css'

export function ListOfShows({ onNotStarted, onNotFound, search, shows }) {
    if (!search) {
        return onNotStarted
    } else if (!shows.length) {
        return onNotFound
    }
    return (
        <div className={styles.ListOfShows}>
            {shows.map(({ id, thumbnail, title, description }) => (
                <Show
                    key={id}
                    id={id}
                    thumbnail={thumbnail}
                    title={title}
                    description={description}
                />
            ))}
        </div>
    )
}

ListOfShows.propTypes = {
    onNotStarted: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
        .isRequired,
    onNotFound: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
        .isRequired,
    search: PropTypes.string,
    shows: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            thumbnail: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    )
}
