// import './App.css';
// import React, { useState, useCallback } from 'react';
// import ItemList from './itemList';


// function App() {

//   const [colored, setColored] = useState(false);
//   const [count, setCount] = useState(1);

//   const style = {
//     color: colored ? 'crimson' : 'white',
//   };

//   const generateItem = useCallback((indexitem) => {
//     return new Array(count).fill("").map((_, index) => `Element ${index + indexitem}`)
//   },[count]);

//   return (
//     <div className="App">
//       <h1 style={style}> Amount of count:{count}</h1>
//       <button onClick={() => setCount(prev => prev + 1)} className='btn-secondary'>Add count </button>
//       <button onClick={() => setColored(prev => !prev)} className='btn-danger'>Change color </button>
//       <ItemList getItems={generateItem} />
//     </div>
//   );
// }

// export default App;
