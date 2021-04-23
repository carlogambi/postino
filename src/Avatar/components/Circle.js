import circle from './images/circle.png';
import Layer from '../utils/Layer';

const Circle = ({ animation, onAnimationEnd }) => (
  <Layer
    src={circle}
    style={{ zIndex: 10 }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
  />
);
export default Circle;
