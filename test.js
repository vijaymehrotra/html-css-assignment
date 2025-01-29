const employee = {
    calcTax(val) {
        console.log("tax rate is : ", val);
    }
}

const e1 = {
    salary: 5000,
}
const e2 = {
    salary: 5000,
}
const e3 = {
    salary: 5000,
}
const e4 = {
    salary: 5000,
}
const e5 = {
    salary: 5000,
}

e1.__proto__ = employee;

console.log(e1.calcTax(20));