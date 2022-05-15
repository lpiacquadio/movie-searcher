import React from 'react'
import { useShows } from '../../hooks/useShows'
import { Search } from '../../components/Search'
import { Spinner } from '../../components/Spinner'
import { Info } from '../../components/Info'
import { ListOfShows } from '../../components/ListOfShows'
import { DEFAULT_TEXTS } from '../../services/settings'
import './Home.css'

export function Home() {
    const { loading, shows, search, onSearch } = useShows('')
    return (
        <div>
            <header className="Searcher">
                <div className="Title">{DEFAULT_TEXTS.TITLE}</div>
                <Search
                    onSearch={onSearch}
                    placeholder={DEFAULT_TEXTS.SEARCH_PLACEHOLDER}
                    value={search}
                />
            </header>
            <main className="Content">
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
