import React, {Component} from 'react';
import MainTable from './MainTable';
import Slider from './Slider';

import '../css/Main.css';

class Main extends Component {
	constructor() {
		super();

		this.state = {
			current: {},
			devices: [],
		}
	}

	componentDidMount() {
		this._fetch();
	}

	/**
 	 * Get the data from the api.
	 */
	_fetch = _ => {
		fetch('/api/v1/device')
			.then(res => res.json())
			.then(res => this.setState({devices: res.data}));
	}

	/**
 	 * Get the current row.
 	 * @param {object} current the current row to be interacted with
	 */
	_getCurrent = current => {
		this.setState({current: current});
	}

	/**
 	 * Update the light bubl.
 	 * @param {number} id the id of the light bulb
 	 * @param {object} data the data of the updated light bulb
	 */
	_update = (id, data) => {
		const options = {
			method: 'PATCH',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({data})
		};

		fetch(`/api/v1/device/${id}`, options)
			.then(res => res.json())
			.then(res => {
				const new_device = res.data;
				const devices = this.state.devices.map(device => {
					if (device.id === new_device.id) return new_device;
					else return device;
				});

				this.setState({
					devices: devices,
					current: new_device
				});
			});
	}

	render() {
		return(
			<div className="Main">
				<MainTable
					devices={this.state.devices} 
					current={this.state.current} 
					_update={this._update} 
					_getCurrent={this._getCurrent} 
				/>
				<Slider 
					current={this.state.current} 
					_update={this._update} 
					_getCurrent={this._getCurrent}
				/>
			</div>
		);
	}
}

export default Main;