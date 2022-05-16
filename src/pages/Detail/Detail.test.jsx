import React from 'react'
import {
    render,
    cleanup,
    waitFor,
    waitForElementToBeRemoved
} from '@testing-library/react'
import { describe, test, afterEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Detail } from './index'

describe('Detail', () => {
    afterEach(cleanup)

    test('Find nothing', async () => {
        const component = render(
            <BrowserRouter>
                <Detail />
            </BrowserRouter>
        )
        await waitFor(() => {
            component.getByLabelText('Loading')
        })
        await waitForElementToBeRemoved(() =>
            component.getByLabelText('Loading')
        )
        component.getByText('404')
    })

    test('Find nothing and then find something', async () => {
        const component = render(
            <BrowserRouter>
                <Detail defaultId={66} />
            </BrowserRouter>
        )
        await waitFor(() => {
            component.getByLabelText('Loading')
        })
        await waitForElementToBeRemoved(() =>
            component.getByLabelText('Loading')
        )
        await component.findAllByText(/Big Bang Theory/)
    })
})
