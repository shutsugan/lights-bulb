'use strict';

class Slider {
	/**
 	 * @param {HTMLElement} context the figure of the slider
 	 * @param {number} position brightness of the row
	 */
	constructor(context, position) {
		this._select = element => document.querySelector(element);
		this.context = context;
		this.position = position;

		this.raf = null;
		this.m_down = false;
		this.m_pos = {x: 0, y: 0};
		this.radius = 146;
		this.knob_radius = 15;
		this.max_diff = 150;
		this.constraint = 360;
		this.target = 0;

		this.x = 0;
		this.y = 0;

		this.circle = this.context.querySelector('.Slider__circle');
		this.inner_circle = this.context.querySelector('.Slider__inner-circle');
		this.knob = this.context.querySelector('.Slider__knob');
		this.progress = this.context.querySelector('.Slider__progress');
		this.ctx = this.progress.getContext('2d');
		this.value = this._select('.Slider__value');

		const circleOffset = this.circle.getBoundingClientRect();
	    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	    this.element_position = {
      		x: circleOffset.left + scrollLeft,
      		y: circleOffset.top + scrollTop
	    };
		this.center_x = this.progress.offsetWidth / 2;
		this.center_y = this.progress.offsetHeight / 2;
		this.canvas_size = this.progress.offsetWidth;

		//calcular the brightness of the selected row
		this.target = (this.position / 100) * 360;
		const value = Math.round((this.target / 360) * 100);
		this.value.innerHTML = `${value}<span class="Slider__per"> %<span>`; 

		this._drawArc();
		this._addEventListener();
		this._updateSlider();
	}

	_addEventListener() {
		this.context.addEventListener('mousedown', event => this.mouseDown(event));
		this.context.addEventListener('mousemove', event => this.mouseMove(event));

		this._select('body').addEventListener('mouseup', event => this.mouseUp(event));
	}

	/**
 	 * update the position of the knob.
	 */
	_updateSlider() {
		this.raf = requestAnimationFrame(this._updateSlider.bind(this));
		this._setPosition();
	}

	_setPosition() {
		this.x = Math.round(this.radius * Math.sin(this.target * Math.PI / 180)) + this.radius - this.knob_radius + 4;
		this.y = Math.round(this.radius * -Math.cos(this.target * Math.PI / 180)) + this.radius - this.knob_radius + 4;
	
		this.knob.style.left = `${this.x}px`;
		this.knob.style.top = `${this.y}px`;
	}

	/**
 	 * draw the layers of the slider.
	 */
	_drawArc() {
		this.progress.width = this.canvas_size;
		this.progress.height = this.canvas_size;

		this.ctx.save();
		this.ctx.translate(this.center_x, this.center_y - this.radius);
		this.ctx.rotate(-90 * Math.PI / 180);

		const gradient = this.ctx.createLinearGradient(100,-50,50,160);
		gradient.addColorStop(0, '#e0ac00');
		gradient.addColorStop(1, '#71590a');//#b58b01

		this.ctx.strokeStyle = gradient;
		this.ctx.beginPath();
		this.ctx.lineWidth = 17;
		this.ctx.arc(0 - this.radius - 1, 0, this.radius - 1, 0, this.target * Math.PI / 180, false);
		this.ctx.stroke();
		this.ctx.restore();
	}

	/**
 	 * get the value to be displayed in the center of the slider.
 	 * @params {Event} event
	 */
	_setMousePosition(event) {
		this.m_pos = {
			x: event.pageX - this.element_position.x,
			y: event.pageY - this.element_position.y
		};

		const atan = Math.atan2(this.m_pos.x - this.radius, this.m_pos.y - this.radius);
		const target = -atan / (Math.PI / 180) + 180;
		const diff = Math.abs(target - this.target);

		if (diff < this.max_diff && target < this.constraint) {
			this.target = target;
			this._drawArc();

			let value = Math.round((this.target / 360) * 100);
			if (value > 100) value = 100;
			this.value.innerHTML = `${value}<span class="Slider__per"> %<span>`;
		}
	}

	mouseDown(event) {
		this.m_down = true;
	}

	mouseUp(event) {
		this.m_down = false;
	}

	mouseMove(event) {
		if (this.m_down) this._setMousePosition(event);
	}
}

export default Slider;