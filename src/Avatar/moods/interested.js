import { fadeIn } from '../animations/fadeIn';
import { fadeOut } from '../animations/fadeOut';
import { move } from '../animations/move';
import { eyesTypes } from '../components/Eyes';
import { mouthTypes } from '../components/Mouth';

const interested = [
  {
    eyes: eyesTypes.closeDown,
    mouth: mouthTypes.neutro,
    animation: {
      mouth: fadeOut(0.2)
    },
  },
  {
    eyes: eyesTypes.open,
    mouth: mouthTypes.open,
    animation: {
      mouth: fadeIn(0.3)
    },
  },
];

export default interested;
