import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../Image'
import { Genres } from '../Genres'
import { Rating } from '../Rating'
import './ShowDetail.css'

export function ShowDetail({
    thumbnail,
    title,
    description,
    dates,
    genres,
    rating
}) {
    return (
        <div className="ShowDetail">
            <Image src={thumbnail} alt={title} ariaLabel="Show's portrait" />
            <div className="ShowDetail-container">
                <h4>
                    {title} <span className="ShowDetail-dates">{dates}</span>
                </h4>
                <div className="ShowDetail-info">
                    <Rating value={rating} />
                    <Genres values={genres} />
                </div>
                <div
                    className="ShowDetail-description"
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
