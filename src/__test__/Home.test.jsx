import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { Home } from '../pages/Home'

describe('Home', () => {
    test('Home component renders correctly', () => {
        const component = renderer.create(<Home />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
