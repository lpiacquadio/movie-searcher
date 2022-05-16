import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import { Rating } from './index'

describe('Rating', () => {
    afterEach(cleanup)

    test('No rating', () => {
        const component = render(
            <Rating />
        )
        const rating = component.getByText('?')
        expect(rating.style.color).toBe('white')
        expect(rating.style.backgroundColor).toBe('black')
    })

    test('Less than 4', () => {
        const component = render(
            <Rating value={3} />
        )
        const rating = component.getByText('3')
        expect(rating.style.color).toBe('white')
        expect(rating.style.backgroundColor).toBe('red')
    })

    test('Less than 6', () => {
        const component = render(
            <Rating value={5} />
        )
        const rating = component.getByText('5')
        expect(rating.style.color).toBe('black')
        expect(rating.style.backgroundColor).toBe('yellow')
    })

    test('Less than 8', () => {
        const component = render(
            <Rating value={7} />
        )
        const rating = component.getByText('7')
        expect(rating.style.color).toBe('white')
        expect(rating.style.backgroundColor).toBe('blue')
    })

    test('Greater or equal than 8', () => {
        const component = render(
            <Rating value={10} />
        )
        const rating = component.getByText('10')
        expect(rating.style.color).toBe('white')
        expect(rating.style.backgroundColor).toBe('green')
    })
})
