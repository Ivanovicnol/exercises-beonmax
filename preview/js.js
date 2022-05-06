/* let num = 10;

function showFirstMessage(text) {
    alert(text);
    let num = 20;
    console.log(num);
}

showFirstMessage('Hello World!');

console.log(num); */

/* function calc(a, b) {
    return (a + b);
} */

/* let calc = function(a, b) {
    return (a + b);
}; */

let calc = (a, b) => a + b;

console.log(calc(3, 4));

console.log(calc(8, 4));

/* console.log(calc(3, 4));

console.log(calc(8, 4)); */

calc(3, 4);

calc(8, 4);

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

console.log(anotherNum);

let str = 'test';

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase());

/* let twelve = '12.2'; */
let twelve = '12.2px';

/* console.log(Math.round(twelve));
console.log(Math.fround(twelve)); */

console.log(parseInt(twelve));
console.log(parseFloat(twelve));


let randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Math.random(randomNumber));

function first() {
    /* Что-то делаем */
    setTimeout(() => {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл 3й урок!');
}

/* learnJS('JavaScript', function() {
    console.log('Я прошёл 3й урок!');
}); */

learnJS('JavaScript', done);

/* let obj = new Object(); */

let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);

options.bool = false;

options.colors = {
    border: 'black',
    background: 'red'
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

console.log(Object.keys(options).length);

/* let arr = ['first', 2, 3, 'four', 5]; */
/* arr[99] = [99];
console.log(arr.length); */

/* arr.pop();
arr.push('5');
arr.shift();
arr.unshift('1'); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* arr.forEach(function(item, i, mass) {
    console.log(`${i}: ${item} (массив: ${mass})`);
});

console.log(arr); */
/* console.log(arr); */

/* for(let i = 0; i < 61; i++) {
    setTimeout(console.log('i'), 1000, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
} */

let mass = [1, 3, 4, 6, 7];

/* for (let key in mass) {
    console.log(key);
} */

for (let key of mass) {
    console.log(key);
}

/* let ans = prompt('', ''),
    arr = [];

arr = ans.split(',');
console.log(arr); */

/* let arr = ['fgfae', 'rtg'],
    i = arr.join(', ');

console.log(i); */

/* let arr = ['fgfae', 'rtg'],
    i = arr.sort();

console.log(i); */

let arr = [1, 15, 4],
    i = arr.sort(compareNumber);

function compareNumber(a, b) {
    return a - b;
}

console.log(i);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};


john.__proto__ = soldier;

console.log(john);
console.log(john.armor);