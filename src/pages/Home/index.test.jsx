import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import { Home } from './index'

describe('Home', () => {
    afterEach(cleanup)

    test('Minimal render display expected text', () => {
        render(<Home />)
        expect(screen.getByText('Home Page'))
    })
})
