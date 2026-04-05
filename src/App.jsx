import React, { useState, useEffect } from 'react';
import './App.css';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  // Handle number input
  const handleNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  // Handle decimal point
  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // Handle operations
  const handleOperation = (op) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      if (result === 'Error') {
        setDisplay('Error');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(false);
        return;
      }
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  // Calculate result
  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        if (current === 0) return 'Error';
        return prev / current;
      default:
        return current;
    }
  };

  // Handle equals
  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      if (result === 'Error') {
        setDisplay('Error');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(false);
        return;
      }
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  // Clear calculator
  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  // Handle backspace
  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') handleNumber(parseInt(e.key));
      if (e.key === '.') handleDecimal();
      if (e.key === '+') handleOperation('+');
      if (e.key === '-') handleOperation('-');
      if (e.key === '*') handleOperation('×');
      if (e.key === '/') {
        e.preventDefault();
        handleOperation('÷');
      }
      if (e.key === 'Enter') handleEquals();
      if (e.key === 'Escape') handleClear();
      if (e.key === 'Backspace') handleBackspace();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [display, operation, previousValue, waitingForNewValue]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="calculator-container bg-white rounded-2xl shadow-2xl p-6 w-80">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Calculator</h1>
        
        {/* Display */}
        <div className="display bg-gray-900 text-white text-right text-4xl font-bold p-4 rounded-lg mb-6 overflow-hidden">
          {display}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <button
            onClick={handleClear}
            className="col-span-3 bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-red-600 transition text-lg"
          >
            Clear
          </button>
          <button
            onClick={handleBackspace}
            className="bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition text-lg"
          >
            ←
          </button>

          {/* Row 2 */}
          <button
            onClick={() => handleNumber(7)}
            className="calculator-btn"
          >
            7
          </button>
          <button
            onClick={() => handleNumber(8)}
            className="calculator-btn"
          >
            8
          </button>
          <button
            onClick={() => handleNumber(9)}
            className="calculator-btn"
          >
            9
          </button>
          <button
            onClick={() => handleOperation('÷')}
            className="calculator-btn-op"
          >
            ÷
          </button>

          {/* Row 3 */}
          <button
            onClick={() => handleNumber(4)}
            className="calculator-btn"
          >
            4
          </button>
          <button
            onClick={() => handleNumber(5)}
            className="calculator-btn"
          >
            5
          </button>
          <button
            onClick={() => handleNumber(6)}
            className="calculator-btn"
          >
            6
          </button>
          <button
            onClick={() => handleOperation('×')}
            className="calculator-btn-op"
          >
            ×
          </button>

          {/* Row 4 */}
          <button
            onClick={() => handleNumber(1)}
            className="calculator-btn"
          >
            1
          </button>
          <button
            onClick={() => handleNumber(2)}
            className="calculator-btn"
          >
            2
          </button>
          <button
            onClick={() => handleNumber(3)}
            className="calculator-btn"
          >
            3
          </button>
          <button
            onClick={() => handleOperation('-')}
            className="calculator-btn-op"
          >
            −
          </button>

          {/* Row 5 */}
          <button
            onClick={() => handleNumber(0)}
            className="col-span-2 calculator-btn"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="calculator-btn"
          >
            .
          </button>
          <button
            onClick={() => handleOperation('+')}
            className="calculator-btn-op"
          >
            +
          </button>

          {/* Row 6 */}
          <button
            onClick={handleEquals}
            className="col-span-4 bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition text-lg"
          >
            =
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Use keyboard or click buttons to calculate
        </p>
      </div>
    </div>
  );
}
