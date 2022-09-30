import React, { useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import "./SpellMessage.css";
import "./SpellText.css";
import SpellMessage from "./SpellMessage";
import SpellButton from "./SpellButton";
import SpellResult from "./SpellResult";
import axios from "axios";

const SpellText = () => {
  const [input1, setInput1] = useState("");
  const [massage, setMassage] = useState("");
  const [text, setText] = useState("");
  const [spans, setSpans] = useState(document.getElementsByTagName("span"));
  const [countCorrect, setCountCorrect] = useState(0);
  const [countIncorrect, setCountIncorrect] = useState(0);

  const items = text.split("");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e56018e9a8mshcfe99019078e214p130926jsnfeac8ce88cd2",
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com/getRandom",
    },
  };

  const handleClick = async () => {
    fetch("https://random-words5.p.rapidapi.com/getRandom", options)
      .then((response) => response.text())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === input1) {
      setMassage("Correct!");
      setCountCorrect((pre) => pre + 1);
      console.log(countCorrect);
    } else {
      setMassage("Incorrect! Please input again!");
      setCountIncorrect((pre) => pre + 1);
      console.log(countIncorrect);
    }
  };

  const handleHint = () => {
    console.log(spans[1].textContent);
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent !== items[i]) {
        spans[i].setAttribute("status", "hint");
      } else {
        spans[i].setAttribute("status", "inputed");
      }
    }
  };

  return (
    <Card className='spell__text'>
      <div className='spell__text--box'>
        {items.map((item, index) => {
          if (input1.split("")[index] === undefined) {
            return (
              <span status='input' key={index}>
                {input1.split("")[index]}
              </span>
            );
          } else {
            return (
              <span status='inputed' key={index}>
                {input1.split("")[index]}
              </span>
            );
          }
        })}
      </div>
      <form>
        <div className='spell__text--input'>
          <input
            type='text'
            size='25'
            value={input1}
            maxlength={items.length}
            onChange={(e) => {
              setInput1(e.target.value.toUpperCase());
            }}
          />
          <button
            className='btn spell__button--enter'
            onClick={handleSubmit}
            type='summit'>
            Enter
          </button>
          <button
            className='btn spell__button--hint'
            onClick={handleHint}
            type='button'>
            Hint
          </button>
        </div>
      </form>
      <SpellMessage textH={massage} />
      <SpellButton click={handleClick} />
      <SpellResult
        countCorrect={countCorrect}
        countIncorrect={countIncorrect}
      />
    </Card>
  );
};

export default SpellText;
