import audioCorrect from "../audio/correct.mp3";
import audioIncorrect from "../audio/incorrect.mp3";

const URL1 = audioCorrect;
const URL2 = audioIncorrect;
const context = new AudioContext();

let yodelBuffer1;
let yodelBuffer2;

window
  .fetch(URL1)
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
  .then((audioBuffer) => {
    yodelBuffer1 = audioBuffer;
  });
window
  .fetch(URL2)
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
  .then((audioBuffer) => {
    yodelBuffer2 = audioBuffer;
  });

function play(audioBuffer) {
  const source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start();
}

export { yodelBuffer1, yodelBuffer2 };
export default play;
