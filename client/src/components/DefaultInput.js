import React, {Component} from 'react';

import '../css/DefaultInput.css';

class DefaultInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			id: this.props.id,
			disabled: this.props.disabled
		}
	}

	_editName = event => {
		event.target.value = event.target.value;
	}

	/**
 	 * Update the name of the current light bulb.
 	 * @param {Event} event
	 */
	_update = event => {
		const id = event.target.id;
		const data = {name: event.target.value};
		
		this.props._update(id, data);
	}

	render() {
		return(
			<input
				className="DefaultInput"
				type="text" 
				name="name"
				id={this.state.id}
				disabled={this.state.disabled}
				defaultValue={this.state.name}
				onChange={this._editName} 
				onBlur={this._update}
			/>
		);
	}
}

export default DefaultInput;