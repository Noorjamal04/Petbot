'use strict';

// taulukko, josta löytyy kissojen ja koirien kuvia sekä tiedot niistä.
const tuoteKuvat = [
    {
        'title': 'Koira 1',
        'caption': 'Mustavalkoinenkoira',
        'genre': 'koira',
        'filename': 'kuvat/dog-1-edit.jpg',
    },
    {
        'title': 'Kissa 1',
        'caption': 'Harmaa_kissa',
        'genre': 'kissa',
        'filename': 'kuvat/cat-2-edit.jpg',
    },
    {
        'title': 'Kisu 2',
        'caption': 'Valkoinen_kissa,_mustat tassut_ja_korvat',
        'genre': 'kissa',
        'filename': 'kuvat/cat-3-edit.jpg',
    },
    {
        'title': 'Koira 2',
        'caption': 'Valkoinen_koira',
        'genre': 'koira',
        'filename': 'kuvat/dog-2-edit.jpg',
    },
    {
        'title': 'Koira 3',
        'caption': 'Ruskea_koira',
        'genre': 'koira',
        'filename': 'kuvat/dog-3-edit.jpg',
    },
    {
        'title': 'Koira 4',
        'caption': 'Beiget_koirat',
        'genre': 'koira',
        'filename': 'kuvat/dog-4-edit.jpg',
    },
    {
        'title': 'Koira 5',
        'caption': 'Beige_koira',
        'genre': 'koira',
        'filename': 'kuvat/dog-5-edit.jpg',
    },
    {
        'title': 'Koira 6',
        'caption': 'Valkoinen_koira',
        'genre': 'koira',
        'filename': 'kuvat/dog-6-edit.jpg',
    },
    {
        'title': 'Kissa 3',
        'caption': 'Valkoinen_kissa',
        'genre': 'kissa',
        'filename': 'kuvat/cat-4-edit.jpg',
    },
    {
        'title': 'Kissa 4',
        'caption': 'Valkoinen_kissa_erivärisillä_silmillä',
        'genre': 'kissa',
        'filename': 'kuvat/cat-5-edit.jpg',
    },
    {
        'title': 'Kissa 5',
        'caption': 'Musta_kissa',
        'genre': 'kissa',
        'filename': 'kuvat/cat-6-edit.jpg',
    }
];

const kissat = document.getElementById("kissat");
const koirat = document.getElementById("koirat");
const empty = document.getElementById("tyhjenna");
const tulostus = document.getElementById("tulos");

kissat.addEventListener('click', kissa);
koirat.addEventListener('click', koira);
empty.addEventListener('click', emptyselect);



//Funktio joka tulostaa koira ja kissa kuvat taulukosta
for ( let i = 0; i< tuoteKuvat.length; i++){
    tulostus.innerHTML +=
            `
         <figure class="tuotekuva">
                <a href= ${tuoteKuvat[i].filename} data-lightbox="image-1" data-title=${tuoteKuvat[i].caption}>
                <img src=${tuoteKuvat[i].filename} ></a>
            </figure>
        `;

}

// Funktio joka tulostaa kissa kuvat taulukosta
function kissa() {
    tulostus.innerHTML = " ";
    for (let i = 0; i < tuoteKuvat.length; i++){
        if (tuoteKuvat[i].genre == 'kissa'){
            tulostus.innerHTML +=
                    `
            <figure class="tuotekuva">
                <a href= ${tuoteKuvat[i].filename} data-lightbox="image-1" data-title=${tuoteKuvat[i].caption}>
                <img src=${tuoteKuvat[i].filename} ></a>
            </figure>
        `;
        }
    }
}
// Funktio joka tulostaa koira kuvat taulukosta
function koira() {
    tulostus.innerHTML = " ";
    for (let i = 0; i < tuoteKuvat.length; i++){
        if (tuoteKuvat[i].genre == 'koira'){
            tulostus.innerHTML +=
                    `
            <figure class="tuotekuva">
                <a href= ${tuoteKuvat[i].filename} data-lightbox="image-1" data-title=${tuoteKuvat[i].caption}>
                <img src=${tuoteKuvat[i].filename} ></a>
            </figure>
        `;
        }
    }
}
//Funktio joka tyhjentää valinnat ja näyttää kaikki kuvat
function emptyselect() {
    tulostus.innerHTML = " ";
    for ( let i = 0; i< tuoteKuvat.length; i++){
        tulostus.innerHTML +=
                `
         <figure class="tuotekuva">
                <a href= ${tuoteKuvat[i].filename} data-lightbox="image-1" data-title=${tuoteKuvat[i].caption}>
                <img src=${tuoteKuvat[i].filename} ></a>
            </figure>
        `;
    }
}
