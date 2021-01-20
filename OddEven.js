let oddId = [];
let evenId = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenId.push(i);
    } else {
      oddId.push(i);
    }
}

console.log("oddUser = " + oddId);
console.log("evenUser = " + evenId);
