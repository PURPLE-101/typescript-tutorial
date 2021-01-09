let age: any = 25;

age=true;
console.log(age);
age = 'hello';
console.log(age);
age={ name:'luigi' };

let mixed: any[] = [];

mixed.push(5);
mixed.push(true);
mixed.push('mario');
console.log(mixed);

let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: false, age: 25 };
console.log(ninja);
