import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import { Detail } from './index'

describe('Detail', () => {
    afterEach(cleanup)

    test('Minimal render display expected text', () => {
        render(<Detail />)
        expect(screen.getByText('Detail Page'))
    })
})
