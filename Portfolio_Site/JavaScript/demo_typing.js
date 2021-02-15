
let textToType = document.getElementById("typing_effect")
let button = document.getElementById("demo_button")

button.addEventListener("click", function() {
    TypeOutText(textToType, 50, "typing", null)
})