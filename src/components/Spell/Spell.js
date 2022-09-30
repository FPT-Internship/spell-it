import React from "react";
import Card from "../UI/Card";
import "./Spell.css";
import SpellText from "./SpellText";
import { useState } from "react";
// import { randomWords } from "random-words";

const Spell = () => {
  // const [text, setText] = useState("");
  // text = randomWords();
  var text = "hello".toUpperCase();
  return (
    <Card className='spell'>
      <SpellText text={text} />
    </Card>
  );
};

export default Spell;
