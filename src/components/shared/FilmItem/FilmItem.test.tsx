import React from 'react'
import { render, screen, fireEvent,  } from '@testing-library/react';
import FilmPage from '../FilmPage/FilmPage'
import { Provider } from 'react-redux'
import { setupStore } from '../../../store/store';

const store = setupStore();
const filmSetup = () => {
    const utils = render(
        <Provider store={store}>
            <FilmPage id='1' data={[]} isLoading={false} vote_average={7.5} img={null}
                original_name="name" name='1' production_countries={[]} genres={[]} tagline={undefined}
                runtime="1" budget='1' release_date='1' overview='1' type="1" />
        </Provider>
    );
    const a = screen.getByText('Смотреть')
    const btn = screen.getByTestId("button")
    const input = screen.queryByRole("input")
    const img = screen.getByRole("img")
    return {
        a, btn, input, img, ...utils
    }
}

describe("Movie", () => {
    test("test FilmItem components", () => {
        const { a, btn, input, img } = filmSetup()
        expect(a).toBeInTheDocument()
        expect(btn).toBeInTheDocument()
        fireEvent.click(btn)
        expect(input).toBeNull()
        expect(img).toBeInTheDocument()
    })
})
