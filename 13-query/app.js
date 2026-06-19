/*
Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:
{
    search: ‘Вася’,
    take: 10,
}
// search=Вася&take=10
*/

function makeQuery(obj) {
    return Object.keys(obj).map(
        key => `${key}=${obj[key]}`
    ).join('&')
}

console.log(makeQuery({search: 'Иван', age: 22}))
console.log(makeQuery({age: 10}))
