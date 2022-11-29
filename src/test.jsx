// import { useStsate } from 'react';
import './test.css';

function TestComponent () {
  const alertMsg = () => {
    alert("you clicked it");
  }

  const logNAlert = () => {
    console.log("Captain's log");
    alert("Check the log!");
  }

  return (
    <div className="testContainer">
      <section className="card">
        <h3 className="cardTitle">this is a card</h3>
        <p className="cardBody">Lorum stuff stuff stuff</p>
        <button className="cardButton" onClick={alertMsg}>Click Me</button>
      </section>
      <section className="card">
        <h3 className="cardTitle">this is another card</h3>
        <p className="cardBody">Recording important info ...</p>
        <button className="cardButton" onClick={logNAlert}>Log it</button>
      </section>
    </div>
  )
};

export default TestComponent;