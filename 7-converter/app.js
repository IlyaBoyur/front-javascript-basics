const CURR_BUCKS = '$'
const CURR_EURO = 'Є'
const CURR_RUB = 'руб'

function convertCurrency(amount, from = CURR_RUB, to = CURR_BUCKS) {
    if (typeof amount != 'number' || amount <= 0) {
        return null;
    }
    if ((from != CURR_BUCKS)
        && (from != CURR_RUB)
        && (from != CURR_EURO)) {
        return null;
    }
    if ((to != CURR_BUCKS)
        && (to != CURR_RUB)
        && (to != CURR_EURO)) {
        return null;
    }
    if (from === to) {
        return amount;
    }

    USD_2_RUB = 73
    EURO_2_RUB = 85
    EURO_2_USD = 1.1

    switch(from) {
        case CURR_BUCKS:
            if (to === CURR_RUB) {
                return amount * USD_2_RUB;
            }
            if (to === CURR_EURO) {
                return amount / EURO_2_USD;
            }
            break;
        case CURR_EURO:
            if (to === CURR_BUCKS) {
                return amount * EURO_2_USD;
            }
            if (to === CURR_RUB) {
                return amount * EURO_2_RUB;
            }
            break;
        case CURR_RUB:
            if (to === CURR_BUCKS) {
                return amount / USD_2_RUB;
            }
            if (to === CURR_EURO) {
                return amount / EURO_2_RUB;
            }
            break;
    }
    return null;
}


console.log(convertCurrency(1000, CURR_RUB, CURR_BUCKS))
console.log(convertCurrency(1, CURR_BUCKS, CURR_RUB))
console.log(convertCurrency(1, 'error', CURR_RUB))
console.log(convertCurrency(1, CURR_RUB, 'error'))
console.log(convertCurrency(1, CURR_RUB, 'error'))
console.log(convertCurrency(-1, CURR_RUB, CURR_BUCKS))