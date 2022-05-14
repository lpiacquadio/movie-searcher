import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { Detail } from '../pages/Detail'

describe('Detail', () => {
    test('Detail component renders correctly', () => {
        const component = renderer.create(<Detail />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
