// import './App.css';
// import React, {useState, useEffect} from 'react';


// function App() {
  
//   // const [data, setData]=useState([]); 
//   const [user, setUser]=useState("Users");
//   const [position, setPosition]=useState({
//     x:0,
//     y:0,
//   })
//   useEffect(()=>{
//     window.addEventListener('mousemove',(event)=>{
//       setPosition({
//         x:event.clientX,
//         y:event.clientY,
//       })
//     })
//   })

//   // useEffect(()=>{
//   //   fetch(`https://jsonplaceholder.typicode.com/${user}`)
//   //   .then(response => response.json())
//   //   .then(json =>setData(json))
//   // },[user])


//   return (
//     <div className="App">
//       <h1>Users:{user}</h1>
//      <button onClick={()=>{setUser("Users")}} className='btn-secondary'>Users</button>
//      <button onClick={()=>{setUser("Posts")}} className='btn-danger'>Posts</button>
//      <button onClick={()=>{setUser("Todos ")}} className='btn-primary'>Todos</button>
//      {/* <pre>{JSON.stringify(data,null , 2  )}</pre> */}
//      <pre>{JSON.stringify(position,null,2)}</pre>
//     </div>
//   );
// }

// export default App;
