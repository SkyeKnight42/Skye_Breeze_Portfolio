

let text= document.getElementById('typing_effect')
let textLength = text.textContent.length
let button = document.getElementById('demo_button')

console.log(textLength)
console.log(text.textContent.length)
button.addEventListener('click', async () => {
    if (text.textContent.length == textLength) {
        let textcopy = text.textContent
        text.innerHTML = ""
    
        for (let x = 0; x < textcopy.length; x++) {
            text.innerHTML += textcopy.charAt(x)
    
            await sleep(50)
        }
    }
})

// await sleep(50)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}