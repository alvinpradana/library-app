function openNavigation() {
    document.getElementById("sideNavigation").style.left = "250px"
    document.getElementById("wrapper").style.marginLeft = "250px"
}

function closeNavigation() {
    document.getElementById("sideNavigation").style.left = "-250px"
    document.getElementById("wrapper").style.marginLeft = "0"
}

function toggledNavigation() {
    document.getElementById("wrapper").classList.toggle("wrapper-open")
    document.getElementById("sideNavigation").classList.toggle("side-open")
}