export const generateExpensiveComputationalFunc = (total = 2500000) => {
  //1000000000 (very expensive)
  //10000000 (medium)
  //2500000( minimum)
  let expensiveComputation = 0;
  for (let i = 0; i < total; i++) {
    expensiveComputation += Math.random();
  }
};
