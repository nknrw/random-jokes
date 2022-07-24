const jokeContainer = document.querySelector('.joke-container');
const jokeElement = document.querySelector('.joke');
const getJokeBtn = document.querySelector('.get-joke-btn');

function returnJoke() {
    jokeElement.textContent = ''
    fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        jokeElement.textContent = data.joke;
    });
    window.scroll(0, 0)
};

getJokeBtn.addEventListener('click',returnJoke);

returnJoke();