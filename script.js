const jokeContainer = document.querySelector('.joke-container');
const jokeElement = document.querySelector('.joke');
const getJokeBtn = document.querySelector('.get-joke-btn');

function returnJoke() {
    fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        jokeElement.textContent = data.joke;
        console.log(jokeElement.textContent)
    })
};

getJokeBtn.addEventListener('click', returnJoke);

returnJoke()