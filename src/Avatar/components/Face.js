import face from './images/face.png';
import Layer from '../utils/Layer';

const Face = ({ animation, onAnimationEnd, step }) => (
  <Layer
    src={face}
    style={{ zIndex: 11 }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
    alt='face'
    step= {step}
  />
);
export default Face;
