const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("getjoke");
const clrBtn = document.getElementById("clearjoke");
const count = document.getElementsByClassName("count");

async function getJoke() {
    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/any");
        const data = await res.json();
        joke.textContent = data.setup + " " + data.delivery;
    } catch (error) {
        joke.textContent = "Failed to fetch joke.";;
    }
}

function updateCount() {
    count[0].textContent = joke.textContent.length;
}

jokeBtn.addEventListener("click", function () {
    getJoke().then(updateCount);
});

clrBtn.addEventListener("click", function () {
    joke.textContent = "";
    updateCount();
});


