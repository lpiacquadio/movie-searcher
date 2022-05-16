import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image } from '../Image'
import './Show.css'

export function Show({ id, thumbnail, title, description }) {
    return (
        <div className="Show">
            <Link to={`/${id}`} className="Show-link" aria-label="Show">
                <Image src={thumbnail} alt={title} ariaLabel="Show's portrait" />
                <h4>{title}</h4>
                <div
                    className="Show-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </Link>
        </div>
    )
}

Show.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}
