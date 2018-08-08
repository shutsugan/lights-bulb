import React from 'react';
import { Button } from 'rendition';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import '../css/SubNavbar.css';

library.add(faHome);
library.add(faLightbulb);
library.add(faChevronLeft);

const SubNavbar = props => (
	<div className="SubNavbar">
		<div className="SubNavbar__button-container">
			<Button className="SubNavbar__button--bg-color" m={2} square>
				<FontAwesomeIcon icon="home" />
			</Button>
			<Button className="SubNavbar__button--bg-color SubNavbar__button--width">
				<FontAwesomeIcon className="SubNavbar__icon--margin" icon="chevron-left" /> Back
			</Button>
		</div>

		<FontAwesomeIcon className="SubNavbar__icon--margin" icon="lightbulb" />
		<h3>{props.title}</h3>
		<p className="SubNavbar__info">Select a row to interact with it</p>
	</div>
);

export default SubNavbar;