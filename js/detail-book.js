const titleBook = document.getElementById("bookTitle")
const imgBrand = document.getElementById("imgBrand")
const heroImg = document.getElementById("heroImg")

const title = localStorage.getItem("img-title")
const image = localStorage.getItem("image")

titleBook.innerText = title
imgBrand.setAttribute("src", image)
heroImg.style.backgroundImage = `url('.${image}')`
console.log(image);