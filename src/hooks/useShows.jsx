import { useState, useEffect } from 'react'
import { getShows } from '../services/getShows'

export function useShows(defaultSearch) {
    const lastSearch = localStorage.getItem('lastSearch') || defaultSearch
    let lastShows = localStorage.getItem('lastShows')
    try {
        lastShows = JSON.parse(lastShows)
    } catch (_) {
        lastShows = []
    }
    const [search, setSearch] = useState(lastSearch)
    const [loading, setLoading] = useState(false)
    const [shows, setShows] = useState(lastShows)

    useEffect(() => {
        if (search) {
            const handler = setTimeout(() => {
                setLoading(true)
                getShows(search).then((newShows) => onSave(newShows))
            }, 1000)
            return () => clearTimeout(handler)
        } else {
            onSave([])
        }
    }, [search])

    const onSearch = (value) => {
        setSearch(value)
        localStorage.setItem('lastSearch', value)
    }

    const onSave = (newShows) => {
        setShows(newShows)
        localStorage.setItem('lastShows', JSON.stringify(newShows))
        setLoading(false)
    }

    return { loading, shows, search, onSearch }
}
