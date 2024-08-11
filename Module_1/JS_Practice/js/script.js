let n = [4, 4, 4, 0, 0, 0, 1, 2, 3, 4];

/* function more4than0(n) {
  let Four = 0;
  for (let x = 0; x <= n.lenght; x++) {
    if (n == 4) {
      console.log(Four);
      Four++;
      console.log(Four);
    }
    if (n === 0) {
      zero = zero + 1;
    }
  }
  console.log(Four);
}
 */
function fx(a) {
  for (let x = 0; x <= a.length; x++) {
    let f;
    let z;
    if (x === 4) {
      f = f + 1;
      console.log(x);
    } else if (x === 0) {
      z = z + 1;
    }
  }
  console.log(f);
  console.log(z);
}

fx(n);
