"use strict";
function Show(name) {
    console.log("Hi", name);
    return name;
}
Show('Ahil');
function Show1(name) {
    console.log("Hi", name);
    return name;
}
Show1('Ahil1');
function Show2(name) {
    console.log("Hi", name);
    return name;
}
Show2('Ahil2');
function Show4(num, TaxYear = 2022) {
    console.log("num=", num);
    if (TaxYear >= 2020) {
        console.log('true', num);
        return num;
    }
    console.log('false');
    return num;
}
Show4(30, 2000);
let obj = { id: 1 };
console.log(obj);
let obj2;
obj2 = { id: 1, name: "Ahil" };
console.log(obj2);
function KgToLbs(weight) {
    if (typeof weight === "number") {
        return console.log('number:', weight * 8);
    }
    else
        return console.log('string:', weight);
}
KgToLbs(10);
KgToLbs('10kg');
function KgToLbs2(weight) {
    if (typeof weight === "number") {
        return console.log('number:', weight * 8);
    }
    else
        return console.log('string:', weight);
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(2);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
//# sourceMappingURL=index2.js.map