import mouthNeutro from './images/M-neutro.png';
import mouthOpen from './images/M-interested.png';
import mouthSmile from './images/M-smile.png';
import Layer from '../utils/Layer';
import emptyPng from '../utils/emptyPng';

export const mouthTypes = {
  open: 'i',
  smile: 's',
  neutro: 'n',
  noMouth: 'def',
};

const Mouth = ({ mood, style, animation, onAnimationEnd, step }) => (
  <Layer
    src={(() => {
      switch (mood) {
        case 'i':
          return mouthOpen;
        case 's':
          return mouthSmile;
        case 'n':
          return mouthNeutro;
        default:
          return emptyPng;
      }
    })()}
    style={{ zIndex: 13, ...style }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
    alt='mouth'
    step= {step}
  />
);
export default Mouth;
