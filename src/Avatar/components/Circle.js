import circle from './images/circle.png';
import Layer from '../utils/Layer';

const Circle = ({ animation, onAnimationEnd, step }) => (
  <Layer
    src={circle}
    style={{ zIndex: 10 }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
    alt='circle'
    step= {step}
  />
);
export default Circle;
