import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

const myDiv = (<div className="big">I AM A BIG DIV</div>)

ReactDOM.render(myDiv, document.getElementById('app'))
