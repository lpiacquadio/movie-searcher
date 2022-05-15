import { useState, useEffect } from 'react'
import { getShow } from '../services/getShow'

export function useShow(id) {
    let lastShow = localStorage.getItem('lastShow')
    try {
        lastShow = JSON.parse(lastShow)
    } catch (_) {
    }
    if (!(lastShow && lastShow.id === parseInt(id))) {
        lastShow = null
    }
    const [show, setShow] = useState(lastShow)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!show) {
            setLoading(true)
            getShow(id).then((newShow) => onSave(newShow))
        }
    }, [])

    const onSave = (newShow) => {
        setShow(newShow)
        localStorage.setItem('lastShow', JSON.stringify(newShow))
        setLoading(false)
    }

    return { loading, show }
}
