// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
export default class App extends Component {
state = {
	PawriDays: [
		{ id: '123s', Day: 'Sunday' },
		{ id: '234r', Day: 'Monday' },
    { id: '123t', Day: 'Wednessday'},
		{ id: '12d5', Day: 'Friday' },
    { id: '234d', Day: 'Saturday'}
	]
}

render() {
	const PartyDays = this.state.PawriDays.length
	const style = {
	'textAlign': 'bottom-right',
	'color': 'red'
	}

	// Return JSX code
	return (
	<div style={style}>
		<h1>I am User</h1>
		<p> We party: {PartyDays} days a week </p>
	</div>
	);
}
}
