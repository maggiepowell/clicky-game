import React from 'react';
import images from './sanrio_characters/character_index';

class Images extends React.Component {

    state = {
        imageList: []
    }

    //componentDidMount is a life cycle hook that will run immediately before the component renders on the DOM
    //only runs once in the life of that component
    componentDidMount() {
        this.resetImageList()
    }

    //function to reset images to isClicked: false
    resetImageList = () => {
        const imageList = [];
        for(let i = 1; i <= 12; i++) {
            imageList.push({
                imgSrc: images["img" + i],
                isClicked: false
            })
        }
        this.setState({
            imageList: imageList
        })
    }

    //based on if image has been clicked increase score or restart game
    handleImageClick = () => {
        this.props.incrementScore()        
    }


    render() {

        const imageList = [];
        for(let i = 1; i <= 12; i++) {
            imageList.push((
                <div className="character-list-image">
                    <img src={images["img" + i]} alt="character" onClick={this.handleImageClick} />
                </div>
            ))
        }

        return (
            <div className="character-list">
                {imageList}
            </div>
        )
    }
}

export default Images;