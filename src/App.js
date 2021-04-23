import './App.css';
import { useState } from 'react';
import { Avatar } from './Avatar/Avatar';

const moods = ['sleepy', 'happy', 'interested', 'shoked'];

function App() {
  const [mood, setMood] = useState(moods[0]);
  return (
    <div className='App'>
      <div id='controls'>
        <div>
          <h2>MOOD</h2>
          <select onChange={(e) => setMood(e.target.value)}>
            {moods.map((s, i) => (
              <option value={s} key={i}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
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
