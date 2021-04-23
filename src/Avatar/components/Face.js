import face from './images/face.png';
import Layer from '../utils/Layer';

const Face = ({ animation, onAnimationEnd }) => (
  <Layer
    src={face}
    style={{ zIndex: 11 }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
  />
);
export default Face;
