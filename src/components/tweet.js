import React from 'react';
import photo from '../images/del-toro.jpg';
import ticoxxo from '../images/ticoxxo.jpg'
import style from '../style/social.css';


class Tweet extends React.Component {


    imageClick(e){
       console.log('click')
    }
  
    render(){
       
        return (
            <div className="wrapper-tweet">
                <img src={photo} alt="guillermo" onClick={this.imageClick} />
                <h6>Learning React? Start Small.</h6>
                <p>Can't pry yourself away from the tutorials? The cure is to make tiny little experiments apps.</p>
            </div>
        );
    }
   
}



export default Tweet;
