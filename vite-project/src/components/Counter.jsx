import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// exporting the react component for this file
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // count is a state variable that holds a value, function to change the state is called setCount
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // event handler function for a button interaction (increases state by 1)
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // event handler function for a button interaction (decreases state by 1)
  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount((count - 1));
  //   }
  // };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/*State value, and handler functions for interactions*/}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        // handleDecrement={handleDecrement}
      />
    </div>
  );
}
