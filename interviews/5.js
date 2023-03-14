/*
реализовать ф-цию, которая будет суммировать и выводить логи 

пример: 
sum(5)(4)(11)

логи:
5
9
20
*/

function sum(n) {
    console.log(n)
    return function (a) {
        return (sum(n + a))
    }
}

sum(5)(4)(11)