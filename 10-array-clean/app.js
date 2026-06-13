function arrayClean(array, deleteFunc) {
    let cleaned = [];
    for (let num of array) {
        if (!deleteFunc(num)) {
            cleaned.push(num);
        }

    }
    return cleaned;
}
const onlyPositive = argument => argument < 0;


const arrayNums = [1, 2, -3, 4, -5, 6];

console.log(arrayClean(arrayNums, onlyPositive));
