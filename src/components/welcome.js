import React from 'react'

export default class Welcome extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>Welcome {this.props.name}</h1>
				</div>
				<div>
					<p>Name taken here as a Props<br />
					other components are comming soon....</p>
				</div>
			</div>
			)
	}
}