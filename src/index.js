import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";

const sub = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(sub);
