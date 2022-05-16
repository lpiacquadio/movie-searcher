import React from 'react'
import { useShows } from '../../hooks/useShows'
import { Search } from '../../components/Search'
import { Spinner } from '../../components/Spinner'
import { Info } from '../../components/Info'
import { ListOfShows } from '../../components/ListOfShows'
import { DEFAULT_TEXTS } from '../../services/settings'
import styles from './Home.module.css'

export function Home() {
    const { loading, shows, search, onSearch } = useShows('')
    return (
        <div className={styles.Home}>
            <header className={styles.Searcher}>
                <div className={styles.Title}>{DEFAULT_TEXTS.TITLE}</div>
                <Search
                    onSearch={onSearch}
                    placeholder={DEFAULT_TEXTS.SEARCH_PLACEHOLDER}
                    value={search}
                />
            </header>
            <main>
                {loading ? (
                    <Spinner />
                ) : (
                    <ListOfShows
                        onNotStarted={<Info>{DEFAULT_TEXTS.NOT_STARTED}</Info>}
                        onNotFound={<Info>{DEFAULT_TEXTS.NOT_FOUND}</Info>}
                        shows={shows}
                        search={search}
                    />
                )}
            </main>
        </div>
    )
}
