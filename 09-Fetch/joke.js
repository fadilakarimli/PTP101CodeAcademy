const btn = document.querySelector('.btn')


btn.addEventListener('click', getJoke)


function getJoke(){
    const joke = document.querySelector('.joke')
    fetch('https://v2.jokeapi.dev/joke/programming?type=single')
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data);
            joke.textContent = data.joke
        })
        .catch((err)=>{
            console.log(err);
            
        })
}

getJoke()