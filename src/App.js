/* global MIDIjs */

import React from 'react'
import './App.css'
import truly1 from './truly1.gif'
import truly2 from './truly2.gif'
import links from './links.gif'
import onlytime from './only_time_enya.mid'
import baby from './dancingbaby.gif'
import homealone from './homealone.gif'
import happybirthday from './cooltext.gif'

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <img src={truly1} />
        <div style={{ width: 800 }}>
          <img src={happybirthday} style={{ marginTop: 200 }} />
          <img src={homealone} style={{ margin: 50 }} />
        </div>
        <div style={{ display: 'block' }}>
          <img src={truly2} style={{ width: 450 }} />
          <img src={baby} style={{ width: 250 }} />
        </div>
      </div>
      <a
        href="#"
        onClick={function() {
          MIDIjs.play(onlytime)
        }}
      >
        Play My Song
      </a>

      <img src={links} />
    </div>
  )
}

export default App
