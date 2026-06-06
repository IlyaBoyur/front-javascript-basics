language = prompt('Введите ваш язык: en,ru,de,cn,es');

let greeting = '';
switch (language) {
    case 'en':
        greeting = 'Good afternoon!';
        break;
    case 'ru':
        greeting = 'Добрый день!';
        break;
    case 'de':
        greeting = 'Guten tag!';
        break;
    case 'cn':
        greeting = '你好!';
        break;
    case 'es':
        greeting = 'Buenas tardes!';
        break;
}

console.log(greeting);