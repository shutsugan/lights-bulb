import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SliderRange from '../modules/Slider';

import '../css/Slider.css';

library.add(faSun);

class Slider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			brightness: null
		}
	}

	componentDidUpdate() {
		this._initSlider();
	}

	/**
 	 * Initialize the sliderb.
	 */
	_initSlider = _ => {
		const element = document.querySelector('.Slider');
		const brightness = this.props.current.brightness ? this.props.current.brightness : this.state.brightness;
		new SliderRange(element, brightness);
	}

	/**
 	 * Update the brightness value of the burrent light bulb.
 	 * @param {Event} event
	 */
	_setBrightness = event => {
		const value = document.querySelector('.Slider__value').textContent;
		const brightness = parseInt(value.split('%')[0]);
		const active = brightness === 0 ? false : true;

		const id = this.props.current.id;
		const data = {
			brightness: brightness,
			active: active
		}

		this._update(id, data);

		const current = {
			element: this.props.current.element,
			name: this.props.current.name,
			id: this.props.current.id,
			brightness: brightness
		};

		this.props._getCurrent(current);
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
		const active = this.props.current.brightness !== undefined ? 'Slider--active' : '';
		
		return(
			<div className={`Slider__container ${active}`}>
				<figure className="Slider" onMouseUp={this._setBrightness}>
					<span className="Slider__value">0</span>
					<span className="Slider__icon">
						<FontAwesomeIcon icon="sun" />
					</span>
					<span className="Slider__brightness">Brightness</span>
					<div className="Slider__circle">
						<div className="Slider__knob" unselectable="on"></div>
					</div>
					<canvas className="Slider__progress"></canvas>
					<div className="Slider__inner-circle"></div>
				</figure>
				<div className="arrow-left"></div>
			</div>
		);
	}
}

export default Slider;