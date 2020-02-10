/* global MIDIjs */

import React from 'react'
import './App.css'
import truly1 from './truly1.gif'
import truly2 from './truly2.gif'
import links from './links.gif'
import onlytime from './only_time_enya.mid'

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <img src={truly1} />
        <div style={{ width: 800 }} />
        <img src={truly2} />
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
