import { fadeIn } from '../animations/fadeIn';
import { fadeOut } from '../animations/fadeOut';
import { eyesTypes } from '../components/Eyes';
import { mouthTypes } from '../components/Mouth';

const shoked = [
  {
    eyes: eyesTypes.open,
    mouth: mouthTypes.open,
    animation: {
      face: fadeIn(2),
      eyes: fadeIn(2),
      mouth: fadeIn(2),
      glass: fadeIn(2),
      circle: fadeIn(2),
    },
  },
  {
    eyes: eyesTypes.open,
    mouth: mouthTypes.open,
    animation: {
      face: fadeOut(2),
      eyes: fadeOut(2),
      mouth: fadeOut(2),
      glass: fadeOut(2),
      circle: fadeOut(2),
    },
  },
];

export default shoked;
