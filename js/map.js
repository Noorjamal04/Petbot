'use strict'


const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

// Funktio joka ajetaan kun paikka tiedot haettu
function success(pos) {
    const crd = pos.coords;

    // Tulostetaan paikkatiedot konsoliin
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    // Käytetään leaflet.js -kirjastoa näyttämään sijainti kartalla
    const map = L.map('map').setView([crd.latitude, crd.longitude], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
    .bindPopup('Olen tässä.')
    .openPopup();

    L.marker([60.187339893549726, 24.95496625551229]).addTo(map)
    .bindPopup('PetBot')
    .openPopup();

    L.Routing.control({
        waypoints: [
            L.latLng([crd.latitude, crd.longitude]),
            L.latLng([60.187339893549726, 24.95496625551229])
        ]
    }).addTo(map);

}

// Funktio jos paikkatietojen hakemisessa tapahtuu virhe
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Käynnistetään paikkatietojen haku
navigator.geolocation.getCurrentPosition(success, error, options);