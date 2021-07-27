// Code Keypad Component Here
import React from 'react'

function Keypad() {

function passEntered()
{
  console.log('Entering password...');
}

  return (
    <input type="password" onChange={passEntered} />
  )
}

export default Keypad

