import React, { Component } from 'react';
import './css/Pirate.css'

// const myColor = '#C90813'

// const myStyle={
//   color: myColor
// }

class Pirate extends Component {
  render() {
  	const {details} = this.props
    return (
    		<ul>
    			<li>{details.name}</li>
    			<li>{details.weapon}</li>
    			<li>{details.vessel}</li>
    			<li><button onClick={() => this.props.removePirate(this.props.index)}>Remove Pirate</button></li>
    		</ul>
    	)
  }
}

export default Pirate;
