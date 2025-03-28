
/*
fucntion price(a, b) {
    return a+b
}
*/



function price() {
    let total = 0
    for (let value of arguments) {
        total += value
    }
}

console.log(price(10, 40, 50, 60)) 