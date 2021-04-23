import { fadeIn } from '../animations/fadeIn';
import { fadeOut } from '../animations/fadeOut';
import { move } from '../animations/move';
import { eyesTypes } from '../components/Eyes';
import { mouthTypes } from '../components/Mouth';

const sleepy = [
  {
    eyes: eyesTypes.closeDown,
    mouth: mouthTypes.noMouth,
    animation: {
      face: fadeOut(2),
      eyes: fadeOut(2),
      mouth: fadeOut(2),
      glass: fadeOut(2),
      circle: fadeOut(2),
    },
  },
  {
    eyes: eyesTypes.closeDown,
    mouth: mouthTypes.smile,
    animation: {
      face: move(2),
      eyes: move(2),
      mouth: move(2),
      glass: move(2),
      circle: move(2),
    },
  },
];

export default sleepy;
