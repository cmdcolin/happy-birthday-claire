/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './App.css'
import truly1 from './truly1.gif'
import truly2 from './truly2.gif'
import links from './links.gif'
import onlytime from './only_time_enya.mp3'
import baby from './dancingbaby.gif'
import homealone from './homealone.gif'
import happybirthday from './cooltext.gif'
import garth from './garth.gif'
import peanut from './mr-peanut.gif'
import please from './please.png'
import chains from './giphy.gif'

let play = false
function App() {
  return (
    <div
      className="App"
      onClick={() => {
        if (!play) {
          new Audio(onlytime).play()
          play = true
        }
      }}
    >
      <img src={happybirthday} />
      <img src={please} style={{ width: '25%' }} />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '25%' }}>
          <img src={truly1} />
          <img src={chains} />
        </div>
        <div style={{ width: '75%' }}>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
            }}
          >
            <img src={peanut} style={{ width: '25%' }} />
            <img src={garth} />
          </div>
          <img src={homealone} />
        </div>
        <div style={{ width: '25%' }}>
          <img src={truly2} />
          <img src={baby} />
        </div>
      </div>

      <img src={links} style={{ width: '100%' }} />
    </div>
  )
}

export default App
