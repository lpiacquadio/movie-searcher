import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../Image'
import { Genres } from '../Genres'
import { Rating } from '../Rating'
import styles from './ShowDetail.module.css'

export function ShowDetail({
    thumbnail,
    title,
    description,
    dates,
    genres,
    rating
}) {
    return (
        <div className={styles.ShowDetail}>
            <Image src={thumbnail} alt={title} ariaLabel="Show's portrait" />
            <div className={styles['ShowDetail-container']}>
                <h4>
                    {title} <span className={styles['ShowDetail-dates']}>{dates}</span>
                </h4>
                <div className={styles['ShowDetail-info']}>
                    <Rating value={rating} />
                    <Genres values={genres} />
                </div>
                <div
                    className={styles['ShowDetail-description']}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </div>
    )
}

ShowDetail.propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    dates: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number
}
