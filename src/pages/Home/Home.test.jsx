import React from 'react'
import {
    render,
    cleanup,
    fireEvent,
    waitFor,
    waitForElementToBeRemoved
} from '@testing-library/react'
import { describe, test, afterEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './index'
import { DEFAULT_TEXTS } from '../../services/settings'

describe('Home', () => {
    afterEach(cleanup)

    test('Find nothing and then find something', async () => {
        const component = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        component.getByText(DEFAULT_TEXTS.NOT_STARTED)
        const search = component.getByTitle('search')
        fireEvent.change(search, { target: { value: 'asdadasdasdasdasd' } })
        await waitFor(() => {
            component.getByLabelText('Loading')
        })
        await waitForElementToBeRemoved(() =>
            component.getByLabelText('Loading')
        )
        component.getByText(DEFAULT_TEXTS.NOT_FOUND)
        fireEvent.change(search, { target: { value: 'Dexter' } })
        await waitFor(() => {
            component.getByLabelText('Loading')
        })
        await waitForElementToBeRemoved(() =>
            component.getByLabelText('Loading')
        )
        await component.findAllByText(/Dexter/)
    })
})
