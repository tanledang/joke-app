import {React, useState} from 'react';
import Joke from './Joke';

const JokeApp = () => {
    const [jokes, setJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchJoke = async () => {
        setIsLoading(true);
        const url = 'https://official-joke-api.appspot.com/random_ten';
        fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                setJokes(jokeJson)
                console.log('New joke stored')
                setIsLoading(false);
            })
    } 

    return (
        <div>
            {isLoading ? <p>"Loading..." </p>: jokes.map(joke => 
            <Joke setup={joke.setup} punchline={joke.punchline} key={joke.id}/>)}

            {!isLoading && <button onClick={fetchJoke}>New Joke</button>}    
        </div>
    )
}

export default JokeApp;