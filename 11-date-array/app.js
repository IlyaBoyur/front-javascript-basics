const VALID_MONTH_DAY =  [
    [1, 31],
    [2, 28],
    [3, 31],
    [4, 30],
    [5, 31],
    [6, 30],
    [7, 31],
    [8, 31],
    [9, 30],
    [10, 31],
    [11, 30],
    [12, 31],
] 

function checkDate(day,month,year) {
    day = Number(day)
    month = Number(month)
    year = Number(year)
    if (typeof day !== 'number'
    || typeof month !== 'number'
    || typeof year !== 'number') {
        return false;
    }
    return !(year < 1900
        || month < 1
        || month > 12
        || day < 1
        || day > VALID_MONTH_DAY.find(pair => pair[0]===month)[1]
    )}

function makeDateRu(day,month,year) {
    return `${day}-${month}-${year}`
}

function filterDateArray(roughArray, makeDate = makeDateRu) {
    return roughArray
    .map(rough => {
        const ru = rough.split('-');
        if (ru.length === 3) { 
            return ['ru'].concat(ru)
        }
        const en = rough.split('/');
        if (en.length === 3) { 
            return ['en'].concat(en)
        }
        return [rough];
    })
    .filter(arr => (arr[0] === 'ru' || arr[0] === 'en'))
    .map(arr => {
        const [notation, ...rest] = arr;
        let day,month,year;
        switch(notation){
            case 'ru':
                [day,month,year]=rest;
                break;
            case 'en':
                [month,day,year]=rest;
                break;
            default:
                return null 
        }
        return checkDate(day,month,year)?makeDate(day,month,year):null;

    })
    .filter(value => value !== null)

}


const arrayRough = [
    '10-02-2022',
    'test',
    '11/12/2023',
    '41/2/2002',
    '32-05-2002',
    '01-13-2009',
    '00-01-1991',
    '30-02-2021',
    '31-12-2021',
];
console.log(filterDateArray(arrayRough));
