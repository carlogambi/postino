import eyesClosedUp from './images/EYES-closed-up.png';
import eyesClosedDown from './images/EYES-closed-down.png';
import eyesOpen from './images/EYES-open.png';
import Layer from '../utils/Layer';

export const eyesTypes = {
  closeUp: 'u',
  closeDown: 'd',
  open: 'default',
};

const Eyes = ({ mood, style, animation, onAnimationEnd, step }) => (
  <Layer
    src={(() => {
      switch (mood) {
        case 'u':
          return eyesClosedUp;
        case 'd':
          return eyesClosedDown;
        default:
          return eyesOpen;
      }
    })()}
    style={{ zIndex: 14, ...style }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
    alt='eyes'
    step= {step}
  />
);

export default Eyes;
