// import './App.css';
// import React, { useRef, useState } from 'react';
// import TextInput from './TextInput';

// function App() {

//     const [card, setCard] = useState('');
//     const [phone, setPhone] = useState('');
//     const [error, setError] = useState('');

//     const cardEl = useRef();
//     const phoneEl = useRef();

//     const validate = () => {
//         if (card.length < 16) {
//             setError('card');
//             cardEl.current.focus();
//             return;
//         }
//         if (phone.length < 10) {
//             setError('phone');
//             phoneEl.current.focus();
//             return;
//         }

//         setError('');
//     }

//     return (
//         <>
//             <div className='App'>
//                 <h1>useImperativeHandle Hook</h1>
//                 <TextInput
//                     hasError={error === 'card'}
//                     placeholder={"Card"}
//                     update={setCard}
//                     value={card}
//                     ref={cardEl}
//                 />
//                 <TextInput
//                     hasError={error === 'phone'}
//                     placeholder={"Phone"}
//                     update={setPhone}
//                     value={phone}
//                     ref={phoneEl}
//                 />
//                 <div>
//                     <button onClick={validate}>Send</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default App;
