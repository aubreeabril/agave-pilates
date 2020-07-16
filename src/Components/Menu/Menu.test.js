import React from 'react'
import { render } from '@testing-library/react'
import Menu from './Menu'

describe('<Menu />', () => {
    it('renders the component', () => {
        const menu = render(<Menu />)
        expect(menu.baseElement).toMatchSnapshot()
    })
})