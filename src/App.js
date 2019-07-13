import React from 'react';
import logo from './logo.svg';
import './style/App.css';

//Components
import Author from "./components/author";
import Tweet from "./components/tweet";
import Icon from "./components/icons"
function SocialCard() {
  return (
    <div className="App">
       <Author />
       <Tweet />
       <Icon />

    </div>
  );
}

export default SocialCard;
