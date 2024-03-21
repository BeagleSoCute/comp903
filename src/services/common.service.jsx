export const generateExpensiveComputationalFunc = () => {
    let expensiveComputation = 0;
    for (let i = 0; i < 1000000000; i++) {
      expensiveComputation += Math.random();
    }
}