import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { describe, test, afterEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { ListOfShows } from './index'
import { DEFAULT_TEXTS } from '../../services/settings'

describe('ListOfShows', () => {
    afterEach(cleanup)

    test('Search not started', async () => {
        const props = {
            onNotStarted: DEFAULT_TEXTS.NOT_STARTED,
            onNotFound: DEFAULT_TEXTS.NOT_FOUND,
            search: '',
            shows: []
        }
        const component = render(
            <BrowserRouter>
                <ListOfShows {...props} />
            </BrowserRouter>
        )
        component.getByText(DEFAULT_TEXTS.NOT_STARTED)
    })

    test('Show not found', async () => {
        const props = {
            onNotStarted: DEFAULT_TEXTS.NOT_STARTED,
            onNotFound: DEFAULT_TEXTS.NOT_FOUND,
            search: 'Something',
            shows: []
        }
        const component = render(
            <BrowserRouter>
                <ListOfShows {...props} />
            </BrowserRouter>
        )
        component.getByText(DEFAULT_TEXTS.NOT_FOUND)
    })

    test('Shows found', async () => {
        const props = {
            onNotStarted: DEFAULT_TEXTS.NOT_STARTED,
            onNotFound: DEFAULT_TEXTS.NOT_FOUND,
            search: 'Something',
            shows: [
                {
                    id: 404,
                    thumbnail: null,
                    title: '404',
                    description: 'This show not exists'
                }
            ]
        }
        const component = render(
            <BrowserRouter>
                <ListOfShows {...props} />
            </BrowserRouter>
        )
        component.getByText('This show not exists')
    })
})
