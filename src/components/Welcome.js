import React, { Component } from 'react';

export class Welcome extends Component {
	render() {
		const { nickname, children } = this.props;
		return (
			<div>
				<p>Musta {nickname}</p>
				{children}
			</div>
		);
	}
}

export default Welcome;
