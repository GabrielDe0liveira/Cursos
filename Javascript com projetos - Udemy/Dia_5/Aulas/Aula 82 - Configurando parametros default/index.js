
function carLoan(loan, rate, years = 5){
    return (loan * rate /100 * years)+loan; // sem o +loan o resultado é apenas o valor do juros e não precisa de parenteses
}

console.log(20000, 2.5, 5); // 2500