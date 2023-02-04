import {React, useState} from 'react';

const JokeApp = () => {
    const [joke, setJoke] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchJoke = async () => {
        setIsLoading(true);
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                setJoke(jokeJson.value)
                console.log('New joke stored')
                setIsLoading(false);
            })
    } 

    return (
        <div>
            <p>{isLoading ? "Loading..." : joke}</p>
            {!isLoading && <button onClick={fetchJoke}>New Joke</button>}    
        </div>
    )
}

export default JokeApp;