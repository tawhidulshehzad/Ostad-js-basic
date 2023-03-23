// // program to generate a multiplication table


function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
  }
}
multiplicationTable(2)