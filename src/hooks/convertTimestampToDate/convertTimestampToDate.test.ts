import { convertTimestampToDate } from "./convertTimestampToDate";

describe('Проверка на правильную дату', () =>{
    test('Проверка', () => {
        expect(convertTimestampToDate("2020-07-03")).toBe('3 июля 2020')
    })
    test('Проверка', () => {
        expect(convertTimestampToDate("2003-05-06")).toBe('6 мая 2003')
    })
})