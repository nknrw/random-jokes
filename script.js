const jokeSetup = document.querySelector('.setup');
const jokePunchline = document.querySelector('.punchline');
const getJokeBtn = document.querySelector('.get-joke-btn');



function returnJoke() {
    jokeSetup.textContent = '';
    jokePunchline.textContent = '';
    fetch(`https://v2.jokeapi.dev/joke/Any`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        if (data.type == "twopart") {
            jokeSetup.textContent = data.setup;
            jokePunchline.textContent = data.delivery;
        } else {
            jokeSetup.textContent = data.joke;
        }
        console.log(data)    
    });
    window.scroll(0, 0)
};

getJokeBtn.addEventListener('click',returnJoke);

returnJoke();