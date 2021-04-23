import { fadeIn } from '../animations/fadeIn';
import { fadeOut } from '../animations/fadeOut';
import { move } from '../animations/move';
import { eyesTypes } from '../components/Eyes';
import { mouthTypes } from '../components/Mouth';

const interested = [
  {
    eyes: eyesTypes.open,
    mouth: mouthTypes.neutro,
    animation: {
      face: move(2),
      eyes: fadeIn(2),
      mouth: fadeIn(2),
      glass: fadeIn(2),
      circle: fadeIn(2),
    },
  },
  {
    eyes: eyesTypes.closeUp,
    mouth: mouthTypes.neutro,
    animation: {
      face: fadeOut(2),
      eyes: fadeOut(2),
      mouth: fadeOut(2),
      glass: fadeOut(2),
      circle: fadeOut(2),
    },
  },
  {
    eyes: eyesTypes.closeUp,
    mouth: mouthTypes.neutro,
    animation: {
      face: move(2),
      eyes: move(2),
      mouth: move(2),
      glass: move(2),
      circle: move(2),
    },
  },
];

export default interested;
