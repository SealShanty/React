import React, { useState} from 'react';

const StateExample = () => {
    // URL of the image
    const [bool, setImageUrl] = useState(true)
    const [worm, setDuneMode] = useState(false)

    const initialState = worm ? 'https://academics.winona.edu/povwinona/wp-content/uploads/sites/4/2022/04/05601fe3-d228-4526-8ede-6192ff20bcc2-paul-dune-1-1080x630.jpg' : 'https://media.tenor.com/g9gtwV9Lbo8AAAAM/hibag-howareyoudoingbag.gif'
    const newState = worm ? 'https://media1.tenor.com/m/tUhJtKzywzoAAAAC/lisan-al-gaib-dunes.gif' : 'https://media.tenor.com/PND6dbMpQysAAAAi/spongebob-sad-spongebob.gif'

    // Dont worry abouttt it :3
    const toggleImage = () => {
        setImageUrl(prevState => !prevState);
    };

    const toggleDuneMode = () => {
        setDuneMode(duneMode => !duneMode);
    };

    return (
        <div>
            <h1>{bool ? "Initial State (" + bool + ")"  : "Changed State (" + bool + ")"}</h1>
            {/* Use the <img> tag with the src attribute set to the image URL */}
            <img onClick={toggleImage} src={bool ? initialState : newState} alt="Example" />
            <br></br>
            <button onClick={toggleDuneMode}>DUNE MODE</button>
        </div>
    );
};

export default StateExample;
