import { useState } from "react";
import PropTypes from "prop-types";

export const Counter = ({ title, initialCounter }) => {
  const [counter, setCounter] = useState(initialCounter);

  return (
    <div>
      <p>{title}</p> 
      <button className="button is-primary" onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  initialCounter: PropTypes.number.isRequired
};
