import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footerButtonContainer'>
            <button>CHARACTERS: 826</button>
            <button>LOCATIONS: 126</button>
            <button>EPISODES: 51</button>
        </div>
        <div className='serverButtonContainer'>
            <button>SERVER STATUS</button>
            <div className='status'></div>
        </div>
    </div>
  )
}
