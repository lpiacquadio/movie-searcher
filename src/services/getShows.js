import 'isomorphic-fetch'
import { API_URL } from './settings'

const successResponse = (apiResponse) => {
    const shows = apiResponse.map(({ show }) => ({
        id: show.id,
        thumbnail: show.image?.medium ?? null,
        title: show.name,
        description: show.summary
    }))
    return shows
}

const errorResponse = (error) => {
    console.error(error)
    return []
}

export function getShows(search = '') {
    const apiURL = `${API_URL}/search/shows?q=${search}`
    return fetch(apiURL)
        .then((res) => res.json())
        .then(successResponse)
        .catch(errorResponse)
}
