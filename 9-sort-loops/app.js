function insert_sort(array) {
    let buffer;
    for (let i=0; i<array.length - 1; i += 1) {
        for (let j=i+1; j<array.length; j += 1) {
            if (array[i] > array[j]) {
                buffer = array[i];
                array[i] = array[j];
                array[j] = buffer;
            }
        }
    }
}

const arr = [1, 40, -5, 10, 0];
insert_sort(arr);
console.log(arr)
