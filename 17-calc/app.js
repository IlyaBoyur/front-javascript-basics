/*
Напишите калькулятор, который позволяет ввести 2 числа в 2 input,
 и нажать на кнопку операции (сложение, деление, вычитание, умножение)

Выведите результат в отдельное поле.
*/
const inputLeft = document.querySelector('.inputLeft');
const inputRight = document.querySelector('.inputRight');
const panel = document.querySelector('.panel');
const buttonSum = document.querySelector('.buttonSum');
const buttonDivision = document.querySelector('.buttonDivision');
const buttonDiff = document.querySelector('.buttonDiff');
const buttonMulti = document.querySelector('.buttonMulti');


function applyOperation(operation) {
    return function () {
        const leftStr = inputLeft.value.trim();
        const left = Number(leftStr);
        const rightStr = inputRight.value.trim();
        const right = Number(rightStr);

        if (!leftStr || isNaN(left) || !(typeof left === 'number')
            || !rightStr  || isNaN(right) || !(typeof right === 'number'))
        {
            show('Заполните оба поля числами');
            return;
        }
        const result = operation(left, right);
        show(result);
    }

}

function show(text) {
    panel.innerText = text;
}


buttonSum.addEventListener('click', applyOperation((l,r) => l + r));
buttonDivision.addEventListener('click', applyOperation((l,r) => {
    if (r === 0) {
        return 'Деление на ноль';
    }
    return l / r;
}));
buttonDiff.addEventListener('click', applyOperation((l,r) => l - r));
buttonMulti.addEventListener('click', applyOperation((l,r) => l * r));
