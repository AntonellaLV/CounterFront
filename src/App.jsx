import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [animate, counter]);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
    setAnimate(true);
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
    setAnimate(true);
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
    setAnimate(true);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  let counterClass = 'counter';
  if (counter > 10) {
    counterClass += ' high';
  } else if (counter < -10) {
    counterClass += ' low';
  }

  return (
    <div className={`App ${theme}`}>
      <h1 className={`${counterClass} ${animate ? 'counterChange' : ''}`}>Counter: {counter}</h1>
      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default App;
