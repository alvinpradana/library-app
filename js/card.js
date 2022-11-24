const books = [
    {
        id: 1,
        title: 'Dilan 1990',
        image: './assets/img/card/card-dilan.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reprehenderit.'
    },
    {
        id: 2,
        title: 'Sebuah Seni',
        image: './assets/img/card/card-art.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reprehenderit.'
    },
    {
        id: 3,
        title: 'React Native',
        image: './assets/img/card/card-native.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reprehenderit.'
    },
    {
        id: 4,
        title: 'JavaScript Uncover',
        image: './assets/img/card/card-js.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reprehenderit.'
    }
]

function renderCard(books) {
    var card = ''
    books.map(book => {
        card += `
            <a href="/detail-book.html" id="logCard-${book.id}" class="text-decoration-none mb-4" data-id="${book.id}">
                <div class="card rounded-4 overflow-hidden shadow me-4" style="width: 18rem;">
                    <div id="imgCard-${book.id}" data-image="${book.image}" style="background-image: url(.${book.image})" class="card-img-top"></div>
                    <div class="card-body">
                        <h5 id="titleCard-${book.id}" data-title="${book.title}" class="text-center font-medium">${book.title}</h5>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reprehenderit.</small>
                    </div>
                </div>
            </a>
        `
        document.getElementById("cardWrapper").innerHTML = card
    })
    
    for (let i=1; i<=books.length; i++) {
        const event = document.getElementById(`logCard-${i}`)
        const id = document.getElementById(`logCard-${i}`).getAttribute("data-id")
        const title = document.getElementById(`titleCard-${i}`).getAttribute("data-title")
        const image = document.getElementById(`imgCard-${i}`).getAttribute("data-image")

        event.addEventListener("click", function(e) {
            const baseUrl = window.location.origin
            window.location.href = baseUrl + "/detail-book.html"

            localStorage.setItem("img-id", id)
            localStorage.setItem("img-title", title)
            localStorage.setItem("image", image)
            
            e.preventDefault()
        })
    }
}

renderCard(books)
