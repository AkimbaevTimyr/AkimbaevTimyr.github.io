import React from 'react'
import { render, screen, fireEvent,  } from '@testing-library/react';
import { Provider } from 'react-redux'
import { setupStore } from '../../../../store/store';
import AllFilms from './AllFilms';

const store = setupStore();
const allFilmsSetup = () => {
    const utils = render(
        <Provider store={store}>
            <AllFilms/>
        </Provider>
    );
    const h1 = screen.getByText('Все фильмы')
    const inputFrom = screen.getByTestId("input-from")
    const inputBefore = screen.getByTestId("input-before")
    const select = screen.getByTestId('select')
    return {
        h1, inputFrom, inputBefore, select, ...utils
    }
}

describe("Movie", () => {
    test('testing AllFilms components', () => {
        const {h1, inputFrom, inputBefore} = allFilmsSetup()
        expect(h1).toHaveTextContent('Все фильмы')
        expect(h1).not.toHaveTextContent('')
        expect(inputFrom.value).toBe('1')
        expect(inputBefore.value).toBe('10')
    })
    test("testing Options", () =>{
        const {select} = allFilmsSetup()
        fireEvent.change(select, {
            target: {value: "Ужасы"}
        })
        expect(select.value).toBe("Ужасы")
        expect(select).toBeInTheDocument()
    })
})
