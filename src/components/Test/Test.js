import React from 'react'

function Test() {
  return (
    <>
      <button>First btn</button>
      <button>Second btn</button>

      <label htmlFor='username'>Username</label>
      <input id='username' type="text" placeholder='Username here...' value="Akif" />

      <img alt="img" src="/incredibles-2.png" />

      <button title='delete'></button>

      <div data-testid="custom-element" />
    </>
  )
}

export default Test
