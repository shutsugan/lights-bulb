import React, {Component} from 'react';
import {Table} from 'rendition';
import SwitchButton from './SwitchButton';
import DefaultInput from './DefaultInput';

import '../css/MainTable.css';

class MainTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			current: this.props.current,
			selected: false
		}
	}

	/**
 	 * Activate a row when selected and set it as current.
 	 * @param {HTMLElement} row the row to activate
	 */
	_activate = row => {
		row.classList.toggle('MainTable__row--active');

		const first_child = Array.from(row.querySelectorAll('a'))[0];
		const last_child  = Array.from(row.querySelectorAll('a'))[2];

		const key = parseInt(first_child.getAttribute('data-key')) + 1;
		const room_name  = first_child.querySelector('input').value || first_child.textContent;
		const brightness = parseInt(last_child.textContent.split('%')[0]);

		const row_obj = {
			element: row,
			id: key,
			name: room_name,
			brightness: brightness
		};

		this.props._getCurrent(row_obj);
		this.setState({
			current: row_obj,
			selected: key
		});
	}

	/**
 	 * Select a row and deselect the current one.
 	 * @param {HTMLElement} row the row to activate
 	 * @param {Event} event the event of the click action
	 */
	_selected = (row, event) => {
		const parent = event.target.parentNode;

		if (parent.dataset.display === 'table-row' && this.state.current.id !== undefined) {
			this.state.current.element.classList.remove('MainTable__row--active');
			this._activate(parent);
		} else if (parent.dataset.display === 'table-row') {
			this._activate(parent);
		}
	}

	/**
 	 * Toggle the state of the switcher.
 	 * @param {boolean} value the state
	 */
	_toggle = value => {
		const state = value ? 100 : 0;

		const current = {
			element: this.state.current.element,
			name: this.state.current.name,
			id: this.state.current.id,
			brightness: state
		};

		this.setState({
			current: current,
			state: value
		});

		this._update(current.id, {brightness: state});
	}

	/**
 	 * Update a device.
 	 * @param {number} id the id of the device to update
 	 * @param {object} data the payload of which the device will be changed by
	 */
	_update = (id, data) => {
		this.props._update(id, data);
	}

	render() {
		const columns = [
			{field: 'Room',},
			{field: 'State'},
			{field: 'Brightness'}
		];

		//Create new object from the devices to insert in the table.
		const data = this.props.devices.map(device => {
			return {
				Room: <DefaultInput id={device.id} disabled={false} name={device.name} _editName={this._editName} _update={this._update} />,
				State: <SwitchButton selected={this.state.selected} id={device.id} state={device.active} _toggle={this._toggle} _update={this._update} />,
				Brightness: `${!device.active ? 0 : device.brightness}%`
			};
		});

		return(
			<Table
				className="MainTable"
				columns={columns}
				data={data}
				onRowClick={this._selected}
			/>
		);
	}
}

export default MainTable;