"use strict";
// ! means we know for sure that we will get some type of value
// const anchor = document.querySelector('a')!;
// console.log(anchor);
var form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
