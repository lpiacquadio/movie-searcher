import React from 'react'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import { IMAGE_SIZE, IMAGE_PLACEHOLDER } from '../../services/settings'
import { Image } from './index'

describe('Image', () => {
    afterEach(cleanup)

    test("Show default image if isn't has source", () => {
        const component = render(<Image ariaLabel="test" />)
        const img = component.getByLabelText('test')
        expect(img).toHaveProperty(
            'src',
            `${IMAGE_PLACEHOLDER}/${IMAGE_SIZE.width}x${IMAGE_SIZE.height}`
        )
    })

    test('Show image when the source has loaded', async () => {
        const src =
            'https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg'
        const component = render(<Image src={src} ariaLabel="test" />)
        const initialImg = component.getByLabelText('test')
        expect(initialImg).toHaveProperty('src', src)
        fireEvent.load(initialImg)
        await waitFor(() => {
            const finalImg = component.getByLabelText('test')
            expect(finalImg).toHaveProperty('src', src)
        })
    })

    test('Show default image when the source has failed', async () => {
        const src =
            'https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg'
        const component = render(<Image src={src} ariaLabel="test" />)
        const initialImg = component.getByLabelText('test')
        expect(initialImg).toHaveProperty('src', src)
        fireEvent.error(initialImg)
        await waitFor(() => {
            const finalImg = component.getByLabelText('test')
            expect(finalImg).toHaveProperty(
                'src',
                `${IMAGE_PLACEHOLDER}/${IMAGE_SIZE.width}x${IMAGE_SIZE.height}`
            )
        })
    })
})
