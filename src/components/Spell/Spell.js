import React from "react";
import Card from "../UI/Card";
import "./Spell.css";
import SpellText from "./SpellText";
import { useState } from "react";


const Spell = () => {
  

  return (
    <Card className='spell'>
      <SpellText />
    </Card>
  );
};

export default Spell;
