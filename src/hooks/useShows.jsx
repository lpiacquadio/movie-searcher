import { useState, useEffect } from 'react'
import { getShows } from '../services/getShows'
import { useSearchParams } from "react-router-dom"
import { QUERY_PARAMETER } from '../services/settings'

export function useShows() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get(QUERY_PARAMETER) || '')
    const [loading, setLoading] = useState(false)
    const [shows, setShows] = useState([])
    const newQueryParameters = new URLSearchParams()

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
        if (value) {
            newQueryParameters.set(QUERY_PARAMETER,  value)
        } else {
            newQueryParameters.delete(QUERY_PARAMETER)
        }
        setSearchParams(newQueryParameters)
        setSearch(value)
    }

    const onSave = (newShows) => {
        setShows(newShows)
        setLoading(false)
    }

    return { loading, shows, search, onSearch }
}
