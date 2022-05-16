import { describe, expect, test } from 'vitest'
import { getShow } from './getShow'

describe('getShow', () => {
    test('Found show', async () => {
        const show = await getShow(169)
        expect(show).toBeDefined()
        expect(show.id).toBe(169)
        expect(show.images.length).toBeGreaterThan(1)
    })

    test('Not found show', async () => {
        const show = await getShow(123123123123)
        expect(show).toBeNull()
    })
})
