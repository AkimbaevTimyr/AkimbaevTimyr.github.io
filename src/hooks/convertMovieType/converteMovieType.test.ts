import { convertMovieType } from "./convertMovieType";

describe('проверка конвертирования фильма - сериала', ()=>{
    test('проверка', ()=> {
        expect(convertMovieType('tv')).toBe('сериал')
    })
    test('проверка', ()=> {
        expect(convertMovieType('movie')).toBe('фильм')
    })
    test('проверка', ()=> {
        expect(convertMovieType('3245')).toBe('—')
    })
    test('проверка', ()=> {
        expect(convertMovieType('abra kadabra')).toBe('—')
    })
})