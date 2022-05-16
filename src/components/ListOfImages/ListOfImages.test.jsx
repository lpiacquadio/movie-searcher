import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { describe, test, afterEach } from 'vitest'
import { ListOfImages } from './index'

describe('ListOfImages', () => {
    afterEach(cleanup)

    test('Show all images', () => {
        const images = [
            'https://static.tvmaze.com/uploads/images/medium_portrait/0/2225.jpg',
            'https://static.tvmaze.com/uploads/images/medium_portrait/39/99906.jpg',
            'https://static.tvmaze.com/uploads/images/medium_portrait/39/99907.jpg',
            'https://static.tvmaze.com/uploads/images/medium_portrait/145/363769.jpg'
        ]
        const component = render(<ListOfImages images={images} />)
        images.forEach((image, index) => {
            component.getByLabelText(`Show's image #${index}`)
        })
    })
})
