import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { App } from '../App'

describe('App', () => {
    test('App component renders correctly', () => {
        const component = renderer.create(<App />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
