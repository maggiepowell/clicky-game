import React from 'react';
import images from './sanrio_characters/character_index';
//installing Lodash to handle shuffle and deep copy 
import _ from 'lodash';

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
    //use cloneDeep and shuffle methods from Lodash
    
    handleImageClick = (event) => {
        let imageList = _.cloneDeep(this.state.imageList);
        console.log(event.target.id);
        this.props.incrementScore();

        //see if image has been clicked
        imageList.forEach((image) => {
            //change event.target.id to a number format
            if (image.id === Number(event.target.id)) {
                console.log("image has been clicked");
                console.log(image);
                if (image.isClicked) {
                    //if the image has been clicked reset score!
                    this.props.resetScore();
                }
                else {
                    //set image to true
                    image.isClicked = true;
                    this.props.incrementScore();
                }
            }
        });

        //shuffle array of images
        imageList = _.shuffle(imageList);
        this.setState({
            imageList
        });         

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


