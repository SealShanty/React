import React, { useState} from 'react';

const MyComponent = () => {
    // URL of the image
    const [imageUrl, setImageUrl] = useState("https://media.tenor.com/PND6dbMpQysAAAAi/spongebob-sad-spongebob.gifhttps://media.tenor.com/g9gtwV9Lbo8AAAAM/hibag-howareyoudoingbag.gif")

    const spongeeScream = () => {
        setImageUrl('https://media.tenor.com/g9gtwV9Lbo8AAAAM/hibag-howareyoudoingbag.gif');
    };

    return (
        <div>
            <h1>spongeee</h1>
            {/* Use the <img> tag with the src attribute set to the image URL */}
            <img onClick={spongeeScream} src={imageUrl} alt="Example" />
        </div>
    );
};

export default MyComponent;
