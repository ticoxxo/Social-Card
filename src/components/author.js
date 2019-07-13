import React from 'react';
import avatar from '../images/ticoxxo.jpg';
import style from '../style/social.css';

const Author = (props)  =>{
    return (
        <div className="wrapper-head">
           <div className="inline">
           <img src={avatar} alt="cabexa" />
           <h6>The Practical Dev @ThePracticalDev .</h6>
           <p>{new Date().getDate()+ ' Sep'}</p>
            </div>
            <p className="name">author:@dceddia</p>
         </div>
    )
}


export default Author;
