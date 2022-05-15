// import React from 'react'
// import { render, cleanup } from '@testing-library/react'
// import { describe, expect, test, afterEach } from 'vitest'
// import { IMAGE_SIZE, IMAGE_PLACEHOLDER } from '../../services/settings'
// import { BrowserRouter } from 'react-router-dom'
// import { ShowDetail } from './index'

// describe('ShowDetail', () => {
//     afterEach(cleanup)

//     test('Display the thumbnail, title and description', async () => {
//         const props = {
//             id: 404,
//             thumbnail: null,
//             title: '404',
//             description: 'This show not exists'
//         }
//         const component = render(
//             <BrowserRouter>
//                 <Show {...props} />
//             </BrowserRouter>
//         )
//         component.getByText(props.title)
//         component.getByText(props.description)
//         const a = component.getByLabelText("Show")
//         expect(a).toHaveProperty(
//             'href',
//             `${window.location.origin}/${props.id}`
//         )
//         const img = component.getByLabelText("Show's portrait")
//         expect(img).toHaveProperty('alt', props.title)
//         expect(img).toHaveProperty(
//             'src',
//             `${IMAGE_PLACEHOLDER}/${IMAGE_SIZE.width}x${IMAGE_SIZE.height}`
//         )
//     })
// })
