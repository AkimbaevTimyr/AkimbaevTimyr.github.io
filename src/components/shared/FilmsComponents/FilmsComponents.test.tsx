import React from 'react'
import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { setupStore } from "../../../store/store"
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import FilmsComponents from './FilmsComponents';

const store = setupStore();

describe("Film Components", () => {
    test("test Films Components", async() => {
        render(<Provider store={store}><FilmsComponents img="1" title='title' subtitle='this is subtitle' link='link' /> </Provider>, {wrapper: BrowserRouter})
        // const sub = screen.getByTestId('sub')
        // expect(sub.value).toBe('this is subtitle')
    })
   
})
