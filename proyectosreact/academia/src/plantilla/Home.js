import logo from '../logo.svg';
import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
         );
    }
}
 
export default Home;