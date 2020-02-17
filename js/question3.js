/*
    JavaScript1 - Module Assignment 4 - Question 3 
*/
const detailUrl = "https://api.rawg.io/api/games/4200";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
/*
let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "question3.html";
}


const detailUrl = `${creatorsUrl}${id}`;
*/
fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch((error) => {
        console.log(error);
    });

function createGameDetails(json) {
    const results = json.results;

    const image = document.querySelector("background_image_additional");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector(".creator-name");
    name.innerHTML = json.name;

    const gameCount = document.querySelector(".game-count");
    gameCount.innerHTML = json.games_count;

    const description = document.querySelector(".creator-description");
    description.innerHTML = json.description;
}
    