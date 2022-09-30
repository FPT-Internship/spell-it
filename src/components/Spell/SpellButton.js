import React from "react";
import "./SpellButton.css";

const SpellButton = (props) => {
  return (
    <div className='spell__button'>
      <div className='spell__button--item'>
        <button className='btn spell__button--play' onClick={props.click}>
          Play
        </button>
      </div>
    </div>
  );
};

export default SpellButton;
