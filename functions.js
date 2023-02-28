// es5

function si(p, t, r) {
  return (intrest = (p * t * r) / 100);
}

console.log(si(10000, 6, 3.5));

//es6
const sI = (P, T, R) => (intrest = (P * T * R) / 100);

console.log(sI(25000, 3, 12.5));
