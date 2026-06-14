function checkCard(card) {
    let parsed = card.trim().replaceAll('-','');
    if (Number(parsed).isNaN
    || parsed.length !== 16)
        return false;
    
    // luna
    parsed = parsed.split('').map(char => Number(char));
    for (let i=0; i<parsed.length; i+=2) {
        updated = parsed[i] * 2
        if (updated > 9) {
            updated -= 9
        }
        parsed[i] = updated
    }
    const sum = parsed.reduce((acc,curr) => acc += curr, 0);
    return sum % 10 == 0;
}



const cards = [
    '1234-4444-0100-2221',
    '12344444-00002221',
    '1234567890',
    '4402-3394-120a-7460',
    '4405-3394-1204-7461',
 ]
 cards.forEach(card => {
    console.log(
        card.padEnd(19, ' ')
        + ' -> '
        + checkCard(card)
    );
 })
