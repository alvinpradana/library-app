const titleBook = document.getElementById("bookTitle")
const imgBrand = document.getElementById("imgBrand")
const heroImg = document.getElementById("heroImg")
const titleDelete = document.getElementById("titleDelete")
const titleEdit = document.getElementById("titleEdit")

const title = localStorage.getItem("img-title")
const image = localStorage.getItem("image")

titleBook.innerText = title
imgBrand.style.backgroundImage = `url('.${image}')`
heroImg.style.backgroundImage = `url('.${image}')`
titleDelete.innerText = title
titleEdit.setAttribute("value", title)
console.log(image);
