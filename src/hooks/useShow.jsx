import { useState, useEffect } from 'react'
import { getShow } from '../services/getShow'

export function useShow(id) {
    const [show, setShow] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getShow(id).then((newShow) => onSave(newShow))
    }, [])

    const onSave = (newShow) => {
        setShow(newShow)
        setLoading(false)
    }

    return { loading, show }
}
