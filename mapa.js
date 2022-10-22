var map = L.map('map').setView([-34.56243206034583, -58.738144746218204], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const santa_maria = "santa_maria.jpg";
const puerta_de_hierro = "puerta_de_hierro.jpg";
const Farmacia = "farmacia.jpg";
const escuela_35 = "escuela35.png"
const escuela ="escuela.jpg";


var marker = L.marker([-34.551257943787895, -58.722902954410884]).addTo(map);

marker.bindPopup(`
<b>Farmacia Gaspar Campos</b>
<p>San Miguel Buenos Aires AR, Av. Dr. Ricardo Balbín 2506, B1663</>
<img src="${Farmacia}"\>
`).openPopup();

var marker = L.marker([-34.56335978050557, -58.73785502436954]).addTo(map);
marker.bindPopup(`
<b>Hospital Santa maria</b>
<p>Defensa, B1663 San Miguel, Provincia de Buenos Aires</>
<img src="${santa_maria}"\>`).openPopup();

var marker = L.marker([-34.55655965960458, -58.72702282751153]).addTo(map);
marker.bindPopup(`
<b>Puerta de Hierro</b>
<p>Av. Dr. Ricardo Balbín 2968, San Miguel, Provincia de Buenos Aires</>
<img src="${puerta_de_hierro}"\>
`).openPopup();

var marker = L.marker([-34.55512004904342, -58.74025429286232]).addTo(map);
marker.bindPopup(`
<b>Escuela 35</b>
<p>Av. Dr. Ricardo Balbín 2968, San Miguel, Provincia de Buenos Aires</>
<img src="${escuela_35}"\>
`).openPopup();

var marker = L.marker([-34.559278740120746, -58.73898127190872]).addTo(map);
marker.bindPopup(`
<b>Escuela 504</b>
<p>Mateo Bootz 1950, San Miguel, Provincia de Buenos Aires</>
<img src="${escuela}"\>
`).openPopup();