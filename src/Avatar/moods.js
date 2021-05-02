import layers from './components/utils'

import happy from './moods/happy';
import interested from './moods/interested';
import wakeUp from './moods/wakeUp';

const moods = {
  happy,
  interested,
  wakeUp,
};

const defaultAnimation = {}
layers.forEach(l => {defaultAnimation[l] = null})

for(let key in moods){
  moods[key] = moods[key].map((item, index) => {
    const mood = {...item, step: index}
    if(!mood.animation){
      throw Error(`🙈🙈 a mood object need a animation property,🙈🙈\n and it must be an object with at least 1 of this keys: ${layers.reduce((acc, curr) => `${acc}, ${curr}`)}`)
    }
    mood.NAME = key
    mood.animation = {
      ...defaultAnimation,
      ...mood.animation
    }
    return mood
  })
}
const moodsNames = []
for (let name in moods) {
  moodsNames.push(name)
}
export {moodsNames}
export default moods;
