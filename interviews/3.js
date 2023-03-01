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
    let keys = keySequence.split('.')
    let depth = -1
    const parseLinks = (nestedObject) => {
        depth++
        if(depth >= keys.length) return
        if (nestedObject[keys[depth]]) {
            return typeof nestedObject[keys[depth]] === 'object' ?
                parseLinks(nestedObject[keys[depth]]) :
                nestedObject[keys[depth]]
        }
    }
    let result = parseLinks(nestedObject)
    return result

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
    let result = get(c.keySequence, c.nestedObject)
    console.log(`case: ${c.keySequence} return ${result}`)
}