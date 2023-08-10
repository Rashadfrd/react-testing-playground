import React, { useEffect, useState } from 'react'

function Test({exampleText}) {
  const[name, setName] = useState('Memmedaga')

  useEffect(()=>{
    setTimeout(() => {
      setName('Agakerim')
    },300);
  },[])
  return (
    <>
      <button>First btn</button>
      <button>Second btn</button>

      <label htmlFor='username'>Username</label>
      <input readOnly id='username' type="text" placeholder='Username here...' value="Akif" />

      <img alt="img" src="/incredibles-2.png" />

      <button title='delete'>Third btn</button>

      <div data-testid="custom-element">Something useful</div>

      <span>{exampleText ? exampleText : 'Nothing is here'}</span>

      <span>{name}</span>
    </>
  )
}

export default Test
