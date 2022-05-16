import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { useShow } from '../../hooks/useShow'
import { Spinner } from '../../components/Spinner'
import { NotFound } from '../../components/NotFound'
import { ShowDetail } from '../../components/ShowDetail'
import { ListOfImages } from '../../components/ListOfImages'
import styles from './Detail.module.css'
import { DEFAULT_TEXTS } from '../../services/settings'

export function Detail({ defaultId }) {
    const { id } = useParams()
    const { loading, show } = useShow(id || defaultId)
    return (
        <div className={styles.Detail}>
            <main>
                {loading ? (
                    <Spinner />
                ) : !show ? (
                    <>
                        <NotFound />
                        <Link to="/" aria-label="Show">{DEFAULT_TEXTS.GO_BACK}</Link>
                    </>
                ) : (
                    <div className={styles['Detail-Content']}>
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
