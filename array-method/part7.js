const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const totalDepositsUSD = movements.filter( mov => mov > 0 ).map( mov => mov * eurToUsd ).reduce(( acc, mov ) => acc + mov, 0 );

console.log(totalDepositsUSD);

// 5522.000000000001


