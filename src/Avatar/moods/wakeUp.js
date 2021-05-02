import { fadeIn } from '../animations/fadeIn';
import { fadeOut } from '../animations/fadeOut';
import { invisible } from '../animations/invisible';
// import { invisible } from '../animations/invisible';
// import { move } from '../animations/move';
import { wait } from '../animations/wait';

import { eyesTypes } from '../components/Eyes';
import { mouthTypes } from '../components/Mouth';

const wakeUp = [
  //animazione in entrata
  {
    eyes: eyesTypes.closeDown,
    mouth: mouthTypes.noMouth,
    animation: {
      face: fadeIn(3),
      eyes: fadeIn(4),
      glass: fadeIn(1),
      circle: fadeIn(1),
    },
  },
  //spariscono gli occhi prima di aprirli
  {
    eyes: eyesTypes.closeDown,
    mouth: mouthTypes.noMouth,
    animation: {
      eyes: fadeOut(0.1),
    },
  },

  // appaiono quelli aperti  
  {
    eyes: eyesTypes.open,
    mouth: mouthTypes.neutro,
    animation: {
      eyes: fadeIn(0.1),
    },
  },
];

export default wakeUp;
