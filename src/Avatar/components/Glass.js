import glass from './images/glass.png';
import Layer from '../utils/Layer';

const Glass = ({ animation, onAnimationEnd }) => (
  <Layer
    src={glass}
    style={{ zIndex: 12 }}
    animation={animation}
    onAnimationEnd={onAnimationEnd}
  />
);
export default Glass;
