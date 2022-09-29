import React from 'react'
import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { setupStore } from '../store/store';
import App from '../App'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const store = setupStore();

describe("Router", () => {
    test("test Films Router", async() => {
        render(<Provider store={store}><App /> </Provider>, {wrapper: BrowserRouter})
        await userEvent.click(screen.getAllByText("Фильмы")[0])
        expect(screen.getByTestId('films-page')).toBeInTheDocument()
    })
    test("test Tv Router", async () => {
        render(<Provider store={store}><App /> </Provider>, {wrapper: BrowserRouter})
        await userEvent.click(screen.getAllByTestId('tv-link')[0])
        expect(screen.getByTestId('tv-page')).toBeInTheDocument()
    })
})
