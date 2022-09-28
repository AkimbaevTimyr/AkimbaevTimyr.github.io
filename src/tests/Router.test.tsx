import React from 'react'
import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { setupStore } from '../store/store';
import App from '../App'
import { MemoryRouter } from 'react-router-dom';

const store = setupStore();


describe("Router", () => {
    test("test Films Router", () => {
        render(<MemoryRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>)

        const filmsLink = screen.getAllByTestId('films-link')[0]
        userEvent.click(filmsLink)
        const filmsPage = screen.getByTestId('films-page')
        expect(filmsPage).toBeInTheDocument()
    })
    test("test Tv Router", () => {
        render(<MemoryRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
            </MemoryRouter>)

        const tvLink = screen.getAllByTestId('tv-link')[0]
        userEvent.click(tvLink)
        const tvPage = screen.getByTestId('tv-page')
        expect(tvPage).toBeInTheDocument()
    })
})
