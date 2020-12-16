import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😘": "Blow A Kiss",
  "😠": "Angry",
  "🤣": "ROFL",
  "😉": "Wink Face",
  "🤐": "Zip It",
  "🤭": "Face with Hand Over Mouth",
  "🤭": "Face with Hand Over Mouth",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "eutral Face",
  "😑": "Expressionless Face",
  "😏": " Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "☝️": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "💅": "Nail Polish",
  "🤳": "Selfie",
  "💪": "Flexed Biceps",
  "🦾": "Mechanical Arm",
  "🦿": "Mechanical Leg",
  "🦵": "Leg",
  "🦶": "Foot",
  "👦": "Boy",
  "👧": "Girl",
  "🧑": "Person"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("meaning of emoji appear here..");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined){
      meaning="oops.. this emoji is not recognized.";
    }
  // react call to show output
   setMeaning(meaning);

  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);  //react call to output.
  }
  
  return (
    
    <div className="App">
      <h1> The Emojipedia "inside out" </h1>

      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2> 

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji){
       return(
        <span 
          onClick={ ()=> emojiClickHandler(emoji)}
          style= {{ fontsize :"2rem", padding:"0.5rem", cursor:"pointer" }} 
          key={emoji}
        > 
         {emoji} 
        </span>
      );

     })}
   </div>
  );
  
}