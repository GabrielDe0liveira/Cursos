const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
const btn = document.getElementById('btn')
// const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    document.getElementById("color").innerHTML = colors[randomColor]
    //color.textContent = colors[randomColor]
})

function getRandomColor(){
    return  Math.floor(Math.random() * colors.length) //do jeito que está, o número vai de 0 a 10
}




// o que está comentado no código faz basicamente o que a linha 8 faz