import React from "react";
import "./SpellMessage.css";

const SpellMessage = (props) => {
  const Message1 = () => {
    if (props.textH === "Correct!") {
      return (
        <div className='spell__message--content correct'>{props.textH}</div>
      );
    } else {
      return (
        <div className='spell__message--content incorrect'>{props.textH}</div>
      );
    }
  };
  return (
    <div className='spell__message'>
      <Message1 />
    </div>
  );
};

export default SpellMessage;
