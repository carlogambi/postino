import './App.css';
import { useState } from 'react';
import { Avatar } from './Avatar/Avatar';
import {moodsNames} from './Avatar/moods';



console.log(moodsNames);
function App() {
  const [mood, setMood] = useState(moodsNames[0]);
  return (
    <div className='App'>
      <div id='controls'>
        <div>
          <h2>MOOD - {mood}</h2>
          {moodsNames.map((s, i) => (
            <button onClick={() => setMood(s)} key={i}>
              {s}
            </button>
          ))}
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}
      >
        <div id='avatarContainer'>
          <Avatar mood={mood} />
        </div>
      </div>
    </div>
  );
}

export default App;
