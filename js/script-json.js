// const req = new XMLHttpRequest();

// req.open('Get', 'https://swapi.dev/api/people/1/')
// req.send();

// req.onload = function () {
//     console.log(req.response);
// }

fetch('https://swapi.dev/api/people/1/')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('height').innerHTML = data.height;
        document.getElementById('mass').innerHTML = data.mass;
        document.getElementById('hair_color').innerHTML = data.hair_color;
        document.getElementById('skin_color').innerHTML = data.skin_color;
        document.getElementById('eye_color').innerHTML = data.eye_color;

        document.getElementById('birth_year').innerHTML = data.birth_year;
        document.getElementById('gender').innerHTML = data.gender;
        document.getElementById('homeworld').innerHTML = data.homeworld;
        document.getElementById('films').innerHTML = data.films;
        document.getElementById('species').innerHTML = data.species;

        document.getElementById('vehicles').innerHTML = data.vehicles;
        document.getElementById('starships').innerHTML = data.starships;
        document.getElementById('created').innerHTML = data.created;
        document.getElementById('edited').innerHTML = data.edited;
        document.getElementById('url').innerHTML = data.url;

    })
    .catch(function () {
        console.log('Error')
    });