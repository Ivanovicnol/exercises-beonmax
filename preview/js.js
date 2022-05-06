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

console.log(options);