import { useState } from 'react'

import './App.css'
/**
 * 
 * Celsius to Fahrenheit:** $F = C \times \frac{9}{5} + 32$
* Fahrenheit to Celsius:** $C = (F - 32) \times \frac{5}{9}$
 */
  function convertCelsiusToFarenheit (celsius : number){
    return (celsius * (9/ 5 )+ 32);
  }

  function convertFarenheitToCelsius (farenheit : number){
    return ((farenheit -32) * (9/5))
  }
//mana state past example- used the func Input comp which means that
//youll have the Temperature input comp


//temp input will have props:
 
/**
 * 
 * <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
 */
// i need to remember 
//youll need to handle the change for both when they change
//so handlechange for the celcius change and then handle change for the faren change 
//how am i gonna 
function App() {

  return (
    <>
    <h1>Temp Convert</h1>
  
      
    </>
  )
}

export default App
