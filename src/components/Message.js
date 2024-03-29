import React, { Component } from 'react';

export class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: 'Hello mga kababayan '
		};
	}

	greetSubscriberHandler = () => {
		this.setState({ message: 'Thank you for Subscribing' });
	};

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={this.greetSubscriberHandler}>Subscribe</button>
			</div>
		);
	}
}

export default Message;
