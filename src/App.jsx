import React, { useState } from 'react'
import "./App.css"
import Electronics from './Components/Electronics'
import HomePage from './Components/HomePage'
import Clothing from './Components/Clothing'
import Accessories from './Components/Accessories'
const App = () => {

  const [selected, setSelected] = useState(0);

  const renderSwitch=(key)=> {
    switch (key) {
      case 0:
        return <HomePage setSelected={setSelected} />;
      case 1:
        return <Electronics setSelected={setSelected}/>;
      case 2:
        return <Clothing setSelected={setSelected}/>;
      case 3:
        return <Accessories setSelected={setSelected}/>;
      default: 
        return <HomePage setSelected={setSelected} />;
    }
  };

  return (
    <>
      {renderSwitch(selected)}
    </>

  )
}

export default App

