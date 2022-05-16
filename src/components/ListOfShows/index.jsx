import React from 'react'
import PropTypes from 'prop-types'
import { NotStarted } from '../NotStarted'
import { NotFound } from '../NotFound'
import { Show } from '../Show'
import styles from './ListOfShows.module.css'

export function ListOfShows({ search, shows }) {
    if (!search) {
        return <NotStarted />
    } else if (!shows.length) {
        return <NotFound />
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
