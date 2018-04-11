var DateCustom = function (value) {
    Date.call(this,value);
    console.log(this);
};
DateCustom.prototype = new Date();
// DateCustom.prototype.constructor = DateCustom;

const now1 = new DateCustom();
const now2 = new Date();
console.log(now1.getTime);
console.log(now2.getTime);
// console.log(now1.getTime());
