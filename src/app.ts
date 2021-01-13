import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 300);

// let docs: HasFormatter[] = [];

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 200);

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);


// invTwo.amount = 400;

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);
});