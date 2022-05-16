import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { describe, test, afterEach } from 'vitest'
import { Genres } from './index'

describe('Genres', () => {
    afterEach(cleanup)

    test('Display the genres', () => {
        const values = ['Other', 'Random', 'Thing']
        const component = render(
            <Genres values={values} />
        )
        values.forEach(value => {
            component.getByText(value)
        })
    })
})
