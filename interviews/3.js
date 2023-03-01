/*
напишите ф-цию get, принимающую последовательность ключей
и возвращающую значение в объекте произвольной вложенности


пример 1
input: 'red.big.apple', {red:{big:{apple:'O'}}}
output: 'O'

пример 2:
input: 'red.fast.fancy.car' , {red:{slow:'smth'}}
output: undefined

*/

const get = (keySequence, nestedObject) => {

}

const cases = [
    {
        keySequence: 'red.big.apple',
        nestedObject: { red: { big: { apple: 'O' } } }
    },
    {
        keySequence: 'red.fast.fancy.car',
        nestedObject: { red: { slow: 'smth' } }
    },
]


for (let c of cases) {
    console.log(`case: ${c.keySequence} return ${get(c.keySequence, c.nestedObject)}`)
}