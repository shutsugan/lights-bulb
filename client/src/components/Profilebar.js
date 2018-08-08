import React from 'react';
import { DropDownButton } from 'rendition';

import '../css/Profilebar.css';

const Profilebar = props => (
	<div className="Profilebar">
		<div className="Profilebar__username">Mohamed Tajjiou</div>
		<div className="Profilebar__avatar">MT</div>
		
		<DropDownButton className="Profilebar__dropdown" mx={2} joined>
          <div>Item</div>
          <div>Item</div>
        </DropDownButton>
	</div>
);

export default Profilebar;