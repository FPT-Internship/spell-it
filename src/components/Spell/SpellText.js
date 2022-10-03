import React, { useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import "./SpellMessage.css";
import "./SpellText.css";
import SpellMessage from "./SpellMessage";
import SpellButton from "./SpellButton";
import SpellResult from "./SpellResult";
import axios from "axios";
import { yodelBuffer1, yodelBuffer2 } from "../../js/apiAudio";
import play from "../../js/apiAudio";

const SpellText = () => {
  const [input1, setInput1] = useState("");
  const [massage, setMassage] = useState("");
  const [text, setText] = useState("");
  const [spans, setSpans] = useState(document.getElementsByTagName("span"));
  const [countCorrect, setCountCorrect] = useState(0);
  const [countIncorrect, setCountIncorrect] = useState(0);

  const items = text.split("");

  const handleGetWord = () => {
    const fetchData = async () => {
      const res = await axios.get(`https://random-word-api.herokuapp.com/word`);
      console.log(res.data[0]);
      setText(res.data[0]);
      setInput1("");
      setMassage("Word has been taken!");
    };
    fetchData();
  };

  const handleClick = () => {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.toUpperCase() === input1) {
      play(yodelBuffer1);
      setMassage("Correct!");
      setCountCorrect((pre) => pre + 1);
    } else {
      play(yodelBuffer2);
      setMassage("Incorrect! Please input again!");
      setCountIncorrect((pre) => pre + 1);
    }
  };

  const handleHint = () => {
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent !== items[i].toUpperCase()) {
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
            type={text}
            size='25'
            defaultValue={input1}
            maxLength={items.length}
            onChange={(e) => {
              if (e.which === 13) {
                setInput1(e.target.value.toUpperCase());
                setMassage("");
              } else {
                setInput1(e.target.value.toUpperCase());
                setMassage("");
              }
            }}></input>
          {/* <input
            type='text'
            size='25'
            value={input1}
            maxLength={items.length}
            onChange={(e) => {
              if (e.which === 13) {
                setInput1(e.target.value.toUpperCase());
                setMassage("");
              } else {
                setInput1(e.target.value.toUpperCase());
                setMassage("");
              }
            }}
          /> */}
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
      <SpellButton clickPlay={handleClick} clickGetWord={handleGetWord} />
      <SpellResult
        countCorrect={countCorrect}
        countIncorrect={countIncorrect}
      />
    </Card>
  );
};

export default SpellText;
