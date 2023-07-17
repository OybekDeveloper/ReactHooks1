import './App.css';
import React, { useReducer } from 'react';
import reducer from './reducer';
function App() {

    const [{ r, g, b }, dispatch] = useReducer(reducer, {
        r: 0,
        g: 130,
        b: 210,
    })


    return (
        <>
            <div className='App'>
                <h1 style={{ color: `rgba(${r},${g},${b})` }}>UseReducer </h1>
                <div>
                    <h4>R</h4>
                    <button onClick={dispatch({ type: "INCREMENT_R" })} >+</button>
                    <button onClick={dispatch({ type: "DECREMENT_R" })} >+</button>
                </div>
                <div>
                    <h4>G</h4>
                    <button onClick={dispatch({ type: "INCREMENT_G" })} >+</button>
                    <button onClick={dispatch({ type: "DECREMENT_G" })} >+</button>
                </div>
                <div>
                    <h4>B</h4>
                    <button onClick={dispatch({ type: "INCREMENT_B" })} >+</button>
                    <button onClick={dispatch({ type: "DECREMENT_B" })} >+</button>
                </div>
            </div>
        </>
    );
}

export default App;
