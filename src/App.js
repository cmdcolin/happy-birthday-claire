/* global MIDIjs */

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

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <img src={truly1} style={{ width: 300, height: 350 }} />
        <div style={{ width: 800 }}>
          <img src={happybirthday} style={{ marginTop: 50 }} />
          <img src={homealone} style={{ margin: 50 }} />
          <img src={garth} style={{ margin: 50 }} />
        </div>
        <div style={{ display: 'block' }}>
          <img src={truly2} style={{ width: 450 }} />
          <img src={baby} style={{ width: 250 }} />
        </div>
      </div>

      <img src={links} />
      <embed src={onlytime} autoPlay loop hidden />
    </div>
  )
}

export default App
