import glass from './images/glass.png';
import Layer from '../utils/Layer';

const Glass = ({ animation, onAnimationEnd, step }) => (
  <Layer
    src={glass}
    style={{ zIndex: 12 }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
    alt='glass'
    step= {step}
  />
);
export default Glass;
