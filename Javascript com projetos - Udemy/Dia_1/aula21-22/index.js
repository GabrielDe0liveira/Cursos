/*

function saleStatus(status, total) {
    console.log("Transação" + status + " Valor total: $" +total);
}
saleStatus("Aprovada", 30);

*/

function percentage10(price) {
    return price - (price * 10/100);
}

let total = percentage10(20);
console.log(total);