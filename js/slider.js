const sliders = [
    {
        id: 1,
        title: 'Ubur-ubur Lembur',
        image: './assets/img/slider/slide-lembur.png',
        description: 'Lorem, ipsum dolor.'
    },
    {
        id: 2,
        title: 'Dilan 1990',
        image: './assets/img/slider/slide-dilan.png',
        description: 'Lorem, ipsum dolor.'
    },
    {
        id: 3,
        title: 'Laskar Pelangi',
        image: './assets/img/slider/slide-laskar-pelangi.png',
        description: 'Lorem, ipsum dolor.'
    },
]

function renderSliders(sliders) {
    var sliderElement = ''
    sliders.map(slider => {
        sliderElement += `
            <div class="gallery-cell rounded-4 overflow-hidden my-auto" style="background-image: url(${slider.image});">
                <div class="content-label">
                    <div class="bg-content-label rounded-bottom overflow-hidden"></div>
                    <div class="px-5 pb-2">
                        <h3 class="text-white font-medium">${slider.title}</h3>
                        <p class="text-white fs-6">${slider.description}</p>
                    </div>
                </div>
            </div>
        `
        document.getElementById("sliderWrapper").innerHTML = sliderElement
    })
}

renderSliders(sliders)