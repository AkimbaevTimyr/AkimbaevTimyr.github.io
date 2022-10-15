import { convertNumbers } from "./convertNumbers";

describe('проверка конвертирование чисел в читабельный вид', ()=> {
    test('корректное значение', ()=>{
        expect(convertNumbers('6000000')).toBe('6 000 000')
    })
    test('корректное значение', ()=>{
        expect(convertNumbers('185000000')).toBe('185 000 000')
    })
})