import React from "react";
import "./SpellResult.css";

const SpellResult = (props) => {
  return (
    <div className='spell__result'>
      <div className='spell__result--content'>
        <h3>
          Total of the number of correct spellings =
          <b style={{ color: "rgb(21, 57, 177)" }}> {props.countCorrect}</b>
        </h3>
      </div>
      <div className='spell__result--content'>
        <h3>
          Total number of words attempted =
          <b style={{ color: "rgb(21, 57, 177)" }}>
            {" "}
            {props.countIncorrect + props.countCorrect}
          </b>
        </h3>
      </div>
      <div className='spell__result--content'>
        <h3>
          Percentage of successful entries =
          <b style={{ color: "rgb(21, 57, 177)" }}>
            {" "}
            {props.countCorrect === 0 && props.countIncorrect === 0
              ? 0
              : Math.round(
                  (props.countCorrect * 100) /
                    (props.countCorrect + props.countIncorrect)
                )}
            %
          </b>
        </h3>
      </div>
    </div>
  );
};

export default SpellResult;
