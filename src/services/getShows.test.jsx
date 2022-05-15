import { describe, expect, test } from 'vitest'
import { getShows } from './getShows'

describe('getShows', () => {
    test('Found show', async () => {
        const shows = await getShows('Breaking Bad')
        expect(shows.length).toBeGreaterThan(1)
        expect(shows[0]).toBeDefined()
        expect(shows[0].id).toBe(169)
    })

    test('Not found show', async () => {
        const shows = await getShows('wfawfawfawgawgawgawgaw')
        expect(shows.length).toBe(0)
    })
})
