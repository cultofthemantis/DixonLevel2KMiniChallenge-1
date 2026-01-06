const jokeBtn = document.getElementById("joke-btn");
const dadJoke = document.getElementById("dad-joke");
const jokeContainer = document.getElementById("joke-container");


dadJoke.innerText = "Click the button for a joke."


async function getJoke() {
  const url = "https://icanhazdadjoke.com/";

  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  });

  const data = await response.json();
  console.log(data.joke);
  dadJoke.innerText = data.joke;
}


jokeBtn.addEventListener("click", function(){
    dadJoke.classList.add("jump");
    dadJoke.style.fontSize = "85px";
    getJoke();
    dadJoke.classList.remove("jump");
})
