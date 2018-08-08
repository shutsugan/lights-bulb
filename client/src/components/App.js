import React, {Component} from 'react';
import dateFormat from 'dateformat';
import Navbar from './Navbar';
import Profilebar from './Profilebar';
import SubNavbar from './SubNavbar';
import Main from './Main';

import '../css/App.css';

class App extends Component {
  render() {
    const now = new Date();
    const date = dateFormat(now, 'dddd, dS mmmm, yyyy');
    const time = dateFormat(now, 'h:MM TT');

    const title = 'Lighting';

    return(
      <div className="App">
        <Navbar date={date} time={time}>
          <Profilebar />
        </Navbar>
        <SubNavbar title={title} />
        <Main />
      </div>
    );
  }
}

export default App;
