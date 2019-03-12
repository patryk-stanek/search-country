'use strict';

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';

    fetch(url + countryName)
        .then(function(resp){
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';

    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        var h1El = document.createElement('h1');
        var h3El = document.createElement('h3');
        var h4El = document.createElement('h4');
        var h5El = document.createElement('h5');
        var img = document.createElement('img');
        img.src = item.flag
        h1El.innerText = item.name;
        h3El.innerText = item.capital;
        h4El.innerText = item.languages[0].name;
        h5El.innerText = item.currencies[0].name + ', ' + item.currencies[0].symbol;
        liEl.appendChild(img);
        liEl.appendChild(h1El);
        liEl.appendChild(h3El);
        liEl.appendChild(h4El);
        liEl.appendChild(h5El);
        // liEl.innerText = item.name + ', ' + item.capital;
        // liEl.innerText = h1El + h2El;
        countriesList.appendChild(liEl);
    });
}