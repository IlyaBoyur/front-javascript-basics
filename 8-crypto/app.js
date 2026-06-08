function crypto(password) {
    const array = password.split('');
    if (array.length < 4) {
        console.log('Слишком короткий пароль');
        return;
    }
    const [f, s, th, ...rest] = password.split('');
    rest.unshift(rest.pop())
    return [th, ...rest, s, f].join('')
}

function check(encrypted, password) {
    return encrypted === crypto(password)
}


function log_check(password) {
    let encrypted = crypto(password)
    console.log(encrypted)
    console.log(check(encrypted, password))
    console.log(check(encrypted, 'invalid'))
}

log_check('password')
log_check('other_password')
