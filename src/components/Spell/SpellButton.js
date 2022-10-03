import React from "react";
import "./SpellButton.css";

const SpellButton = (props) => {
  return (
    <div className='spell__button'>
      <div className='spell__button--item'>
        <button className='btn spell__button--play' onClick={props.clickPlay}>
          Play
        </button>
        <button
          className='btn spell__button--play'
          onClick={props.clickGetWord}>
          Get Word
        </button>
      </div>
    </div>
  );
};

export default SpellButton;
