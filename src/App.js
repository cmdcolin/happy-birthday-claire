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

var audio = new Audio(onlytime)

function App() {
  return (
    <div
      className="App"
      onClick={() => {
        audio.play()
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ width: '25%' }}>
          <img src={truly1} style={{ width: 300, height: 350 }} />
        </div>
        <div style={{ width: '75%' }}>
          <img src={happybirthday} style={{ marginTop: 50 }} />
          <img src={please} style={{ width: '25%' }} />
          <div style={{ display: 'flex' }}>
            <img src={peanut} style={{ margin: 50 }} />
            <img src={garth} style={{ margin: 50 }} />
          </div>
          <img src={homealone} style={{ margin: 50 }} />
        </div>
        <div style={{ width: '25%' }}>
          <img src={truly2} style={{ width: 450 }} />
          <img src={baby} style={{ width: 250 }} />
        </div>
      </div>

      <img src={links} style={{ width: '100%' }} />
    </div>
  )
}

export default App
