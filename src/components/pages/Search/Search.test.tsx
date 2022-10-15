import React from 'react'
import { render, screen, fireEvent,  } from '@testing-library/react';
import Search from './Search'
import { Provider } from 'react-redux'
import { setupStore } from '../../../store/store';
const store = setupStore();

const searchSetup = () =>{
    const utils =  render(<Provider store={store}><Search /></Provider>)
    const input = screen.getByTestId("input") as HTMLInputElement
    return { input, ...utils}
}

describe("Search", () => {
    test("test SearchPage components", () => {
        const {input} = searchSetup()
        expect(input).toContainHTML('')
        fireEvent.change(input, { target: { value: '123' } })
        expect(input.value).toBe('123')
    })
})
