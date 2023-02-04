import {React} from 'react';

const Joke = ({setup, punchline}) => {

    return (
        <div>
            <hr></hr>
            <p>{setup}</p>
            <p>{punchline}</p>
            <hr></hr>
        </div>
    )
}

export default Joke;