import 'isomorphic-fetch'
import { format } from 'date-fns'
import { API_URL } from './settings'

const successResponse = (apiResponse) => {
    if (apiResponse.status !== 404) {
        const show = {
            id: apiResponse.id,
            thumbnail: apiResponse.image?.medium ?? null,
            title: apiResponse.name,
            description: apiResponse.summary,
            genres: apiResponse.genres,
            rating: apiResponse.rating.average,
            images: apiResponse._embedded.images.filter(image => image?.resolutions?.medium?.url).map(image => image.resolutions.medium.url)
        }

        if (apiResponse.premiered) {
            const premiered = apiResponse.premiered.split('-')
            show.premiered = format(new Date(premiered[0], premiered[1], premiered[2]), 'MM/dd/yyyy')
        } else {
            show.premiered = '?'
        }

        if (apiResponse.ended) {
            const ended = apiResponse.ended.split('-')
            show.ended = format(new Date(ended[0], ended[1], ended[2]), 'MM/dd/yyyy')
        }

        return show
    } else {
        return null
    }
}

const errorResponse = (error) => {
    console.error(error)
    return null
}

export function getShow(id) {
    const apiURL = `${API_URL}/shows/${id}?embed=images`
    return fetch(apiURL)
        .then((res) => res.json())
        .then(successResponse)
        .catch(errorResponse)
}
