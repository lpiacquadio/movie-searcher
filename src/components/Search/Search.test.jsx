import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import { Search } from './index'

describe('Search', () => {
    afterEach(cleanup)

    test('Call onSearch when input changes', () => {
        let called = false
        const props = {
            onSearch: () => {
                called = true
            }
        }
        const component = render(<Search {...props} />)
        const search = component.getByTitle('search')
        fireEvent.change(search, { target: { value: 'asd' } })
        expect(called).toBe(true)
    })

    test('Focus on the input when the component has been clicked', () => {
        let focused = false
        const props = {
            onSearch: () => {}
        }
        const component = render(<Search {...props} />)
        const search = component.getByTitle('search')
        const icon = component.getByLabelText('Search')
        search.onfocus = () => {
            focused = true
        }
        fireEvent.click(icon)
        expect(focused).toBe(true)
    })
})
