const hasLicense = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicense && age >= 18 && !isDrunk;
console.log(`Водитель хочет сесть за руль: ${canDrive ? 'может' : 'не может' }`) 