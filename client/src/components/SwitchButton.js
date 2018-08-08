import React, {Component} from 'react';

import '../css/SwitchButton.css';

class SwitchButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			state: this.props.state
		}
	}

	/**
 	 * Toggle the state of the switch.
 	 * @param {Event} event
	 */
	_toggle = event => {
		this.props._toggle(!this.state.state);
		this._update(event);
		this.setState({state: !this.state.state})
	}

	/**
 	 * Update the state of the current light bubl.
 	 * @param {Event} event
	 */
	_update = event => {
		const id = event.target.id;

		const active = this.state.state;
		const brightness = (!active) ? 100 : 0;
		const data = {
			active: !active,
			brightness: brightness
		}

		this.props._update(id, data);
	}


	render() {
		const active = this.props.selected === this.props.id ? 'active' : '';

		return(
			<label className={`SwitchButton ${active}`}>
	        	<input 
	        		type="checkbox"
	        		checked={this.props.state} 
	        		id={this.props.id}
	        		className="SwitchButton__toggle" 
	        		onChange={this._toggle}
	        		/>
	        	<span className="SwitchButton__label">on</span>
	        </label> 
		);
	}
}

export default SwitchButton;