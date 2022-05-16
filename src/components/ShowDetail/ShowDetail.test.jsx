import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { describe, test, afterEach } from 'vitest'
import { ShowDetail } from './index'

describe('ShowDetail', () => {
    afterEach(cleanup)

    test('Display the thumbnail, title, description, dates, genres and rating', () => {
        const props = {
            id: 404,
            title: '404',
            description: 'This show not exists',
            dates: '(01/01/2022 - 01/02/2022)',
            genres: ['Random'],
            rating: 10
        }
        const component = render(
            <ShowDetail {...props} />
        )
        component.getByLabelText("Show's portrait")
        component.getByText(props.title)
        component.getByText(props.description)
        component.getByText(props.dates)
        props.genres.forEach(genre => {
            component.getByText(genre)
        })
        component.getByText(10)
    })
})
