import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useShow } from '../../hooks/useShow'
import { Spinner } from '../../components/Spinner'
import { ShowDetail } from '../../components/ShowDetail'
import { ListOfImages } from '../../components/ListOfImages'
import './Detail.css'

export function Detail({ defaultId }) {
    const { id } = useParams()
    const { loading, show } = useShow(id || defaultId)
    return (
        <div className="Detail">
            <main>
                {loading ? (
                    <Spinner />
                ) : !show ? (
                    <div>404</div>
                ) : (
                    <div className="Detail-Content">
                        <ShowDetail
                            id={show.id}
                            thumbnail={show.thumbnail}
                            title={show.title}
                            description={show.description}
                            dates={`(${show.premiered}${
                                show.ended ? ' - ' + show.ended : ''
                            })`}
                            genres={show.genres}
                            rating={show.rating}
                        />
                        <ListOfImages images={show.images} />
                    </div>
                )}
            </main>
        </div>
    )
}

Detail.propTypes = {
    id: PropTypes.number
}
