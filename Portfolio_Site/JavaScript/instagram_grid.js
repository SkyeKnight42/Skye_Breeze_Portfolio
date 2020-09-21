
const imageFilePath = "../Images/Instagram/"
const imagePath = [
    "Cards_Against_Humanity_Pride_Pack.jpg",
    "Disney_Drawing.jpg",
    "Freddie.jpg",
    "Hand_Drawing.jpg",
    "Justin_Case.jpg",
    "Skye_Drawing.jpg",
    "Skye_Graduation.jpg",
    "Skye_Red_Hair.jpg",
    "Wing_Drawing.jpg"
]

const imageURL = [
    "https://www.instagram.com/p/BkTL0dugJgH/",
    "https://www.instagram.com/p/BCyCIM8DrMH/",
    "https://www.instagram.com/p/By9wApnj6B7/",
    "https://www.instagram.com/p/9gxouwDrNm/",
    "https://www.instagram.com/p/BbUSeOnj6Qw/",
    "https://www.instagram.com/p/BD_sktUDrNS/",
    "https://www.instagram.com/p/B3rVGSODl4J/", //Graduation
    "https://www.instagram.com/p/BihZyoRgT5F/",
    "https://www.instagram.com/p/BDO35XxjrFA/"
]

const container = document.getElementById('instagram_container')

document.addEventListener("DOMContentLoaded", () => {
    ShuffleImages()

    CreateImages()
})

function ShuffleImages() {
    for (let x = 0; x < imagePath.length; x++) {
        let image = imagePath[x]
        let random = Math.floor(Math.random() * imagePath.length)
        let temp = imagePath[random]
        imagePath[random] = image
        imagePath[x] = temp

        let imageurl = imageURL[x]
        let tempurl = imageURL[random]
        imageURL[random] = imageurl
        imageURL[x] = tempurl
    }
}

function CreateImages() {
    for (let x = 0; x < imagePath.length; x++) {
        let newLink = document.createElement('a')
        newLink.classList.add('image_container');
        let newImage = document.createElement('img')
        newImage.src = imageFilePath + imagePath[x]
        newImage.alt = imagePath[x]
        newLink.href=imageURL[x]
        newLink.target="_blank"
        newLink.appendChild(newImage)
        container.prepend(newLink)
    }
}

