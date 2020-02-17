/*
    JavaScript1 - Module Assignment 4 - Question 2 
*/

const gamesUrl = "https://api.rawg.io/api/games";
const displayedInfo = document.querySelector(".results");
let html = "";

fetch(gamesUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        createGames(json);
    })
    .catch((error) => {
        console.log(error);
    });

function createGames(json) {
    const results = json.results;

    results.forEach(function(output) {
        console.log(output);
        html += `<div class="game">
                <h2>${output.name}</h2>
                <img src="${output.background_image}" alt="${output.name}">
                </div>`
    });

    displayedInfo.innerHTML = html;
};
