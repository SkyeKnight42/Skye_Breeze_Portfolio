

let text= document.getElementById('typing_effect')
let textLength = text.textContent.length
let button = document.getElementById('demo_button')
let textcopy


button.addEventListener('click', function() {
    if (text.textContent.length == textLength) {
        textcopy = text.textContent
        text.innerHTML = ""
    
        for (let x = 0; x < textcopy.length; x++) {
            addLetter(x, textcopy.charAt(x))
        }
    }
})

function addLetter(_index, _letter) {
    setTimeout(function() {
        text.innerHTML += _letter
    }, _index * 50)
}
