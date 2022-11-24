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
            <a href="/detail-book.html" class="text-decoration-none mb-4">
                <div class="card rounded-4 overflow-hidden shadow me-4" style="width: 18rem;">
                    <img src="${book.image}" class="card-img-top" alt="Card cover">
                    <div class="card-body">
                        <h5 class="text-center font-medium">${book.title}</h5>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reprehenderit.</small>
                    </div>
                </div>
            </a>
        `
        document.getElementById("cardWrapper").innerHTML = card
    })
}

renderCard(books)