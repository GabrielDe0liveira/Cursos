
function formatMoney(value){
    value = value.toFixed(2) //fixa o valor decimal em 2 casas
    return "$ " + value
}

function update(){
    let bill = Number (document.getElementById("yourBill").value)
    let tipPercent = document.getElementById("tipInput").value
    let split = document.getElementById("splitInput").value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    let tipEach = tipValue / split
    let totalEach = billEach + tipEach

    document.getElementById("tipPercent").innerHTML = tipPercent + " %"
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue)
    document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal)
    document.getElementById("billEach").innerHTML = formatMoney(billTotal / split)
    document.getElementById("splitValue").innerHTML = split
    document.getElementById("tipEach").innerHTML = formatMoney(tipValue / split)
    document.getElementById("totalEach").innerHTML = formatMoney(totalEach)
}


