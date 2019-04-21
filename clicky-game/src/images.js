import React from 'react';
import images from './sanrio_characters/character_index';

class Images extends React.Component {

    render() {

        const imageList = [];
        for(let i = 1; i <= 12; i++) {
            imageList.push((
                <div>
                    <img src={images["img" + i]} alt="character" />
                </div>
            ))
        }

        return (
            <div>
                {imageList}
            </div>
        )
    }
}

export default Images;