import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from './components/Message';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Message />
				<Greet name="Teddy" nickname="Brad Pitt" />
				<Greet name="Yema" nickname="Pit Bull">
					<button>Pindot</button>
				</Greet>
				<Greet name="Ube" nickname="Eminem" />
				<Welcome name="Teddy" nickname="Brad Pitt">
					<input type="text" name="" id="" value="Enter here" />
				</Welcome>
				<Welcome name="Yema" nickname="Pit Bull" />
				<Welcome name="Ube" nickname="Eminem" />
			</div>
		);
	}
}

export default App;
