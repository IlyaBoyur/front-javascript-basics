let addressLat = 4;   // адрес назначения lat (например: 10)
let addressLong = 3;  // адрес назначения long
let positionLat = 0;    // текущее положение пользователя lat
let positionLong = 0;  // текущее положение пользователя long

let distance = ((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5;
console.log(`
Расстояние между точками 
(${positionLat}, ${positionLong})
и (${addressLat}, ${addressLong})
равно: ${distance}`)

