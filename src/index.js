function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}


module.exports = function zeros(expression) {
  const parts = expression.split('*');

  let five = 0;
  let two = 0;

  parts.forEach((part) => {
    const n = parseInt(part);
    if (part.includes('!!')) {
      for (let i = n; i > 0; i=i-2) {
        // console.log('i', i);
        if (i % 5 === 0) {
          let chislo = i;
          while (chislo % 5 === 0) {
            chislo = chislo / 5; 
            five++;
          }

          // five++;
          // console.log('five', five);

        }
        
        if (i % 2 === 0) {
          let chislo = i;
          while (chislo % 2 === 0) {
            chislo = chislo / 2; 
            two++;
          }
        }
      }
    } else {
      for (let i = n; i > 0; i=i-1) {
        let chislo = i;
        while (chislo % 5 === 0) {
          chislo = chislo / 5; 
          five++;
        }
        if (i % 2 === 0) {
          let chislo = i;
          while (chislo % 2 === 0) {
            chislo = chislo / 2; 
            two++;
          }
        }
      }
    }

    // console.log('parts', part, two, five);
  })


  return Math.min(two, five);
}
