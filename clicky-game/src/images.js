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

    //function to reset images to isClicked: false, add id number
    resetImageList = () => {
        const imageList = [];
        for (let i = 1; i <= 12; i++) {
            imageList.push({
                imgSrc: images["img" + i],
                isClicked: false,
                id: i
            })
        }
        this.setState({
            imageList: imageList
        })
    }

    //based on if image has been clicked increase score or restart game
    handleImageClick = (event) => {
        console.log(event.target.id);
        this.props.incrementScore()
    //use lowDash to create a copy of state.imageList loop through that copy until we reach the image object that has the same id as the image that we clicked (event.target.id)

    //once reached, see if already been clicked. if isClicked = true, GAME OVER!

    //see app.js for create restart game 
    }


    render() {

        const images = this.state.imageList.map((image) => {
            return (
                <div className="character-list-image">
                    <img src={image.imgSrc} alt="character" id={image.id} onClick={this.handleImageClick} />
                </div>
            )
        })

        return (
            <div className="character-list">
                {images}
            </div>
        )
    }
}

export default Images;


