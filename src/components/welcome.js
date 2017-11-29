import React from 'react'

export default class Welcome extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>Welcome {this.props.name}</h1>
				</div>
				<div>
					<p>Some Text :) </p>
				</div>
			</div>
			)
	}
}