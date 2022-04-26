import React, { useState } from 'react'

import './App.css';
import Story from './modules/Story'
import People from './modules/People';
import Stones from './modules/Stones';
import infinity_story from './infinity_stones.json'

function App() {
  const story = JSON.parse(JSON.stringify(infinity_story)).story
  const characters_data = JSON.parse(JSON.stringify(infinity_story)).characters
  const stones_data = JSON.parse(JSON.stringify(infinity_story)).stones

  const [actualRow, setActualRow] = useState(returnRow("0"))
  const [characters, setCharacters] = useState(characters_data)
  const [stones, setStones] = useState([])

  function returnCharacters(chars) {
    const newChars = []
    console.log(chars)
    for(let ch_d of characters_data) {
      console.log(ch_d)
      if(chars.includes(ch_d.nick)) {
        newChars.push(ch_d)
      }
    }
    return newChars
  }

  function returnRow(id) {
    for(let row of story) {
      if(row.id === id) {
        if(row.id === "2" || row.id === "3") {
          setStones([])
        }
        if ('kamien' in row) {
          const newStones = []
          for(let kolor of row.kamien) {
            for(let st of stones_data) {
              if(st.id === kolor) {
                newStones.push(st)
              }
            }
          }
          const oldStones = stones
          setStones(oldStones.concat(newStones))
        }
        if ('team' in row) {
          setCharacters(returnCharacters(row.team))
        }
        if ('dead' in row) {
          const newCharacters = characters
          const dead = row.dead
          let index = 0
          for (let char of characters) {
            console.log(char.nick, "===", dead)
            if(char.nick === dead) {
              break
            }
            else {
              index += 1
            }
          }

          if (index !== characters.len) {
            newCharacters.splice(index, 1)
          } 
          console.log("nowa tab", newCharacters)
          setCharacters(newCharacters)
        }
        return row
      }
    }
  }

  function changeRow(nextId) {
    setActualRow(returnRow(nextId))
  }

  function handleDisplay() {
    console.log("team")
  }

  return (
    <div className='container'>
      <People characters={characters}/>
      <Story row={actualRow} change={changeRow} handleDisplay={handleDisplay}/>
      <Stones stones={stones}/>
    </div>
  );
}

export default App;