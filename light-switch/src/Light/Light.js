import React, { Component } from 'react';
class Light extends Component {
    render () {
        let roomStatus = null;
        if (this.props.isActive) {
            roomStatus = (
                <div className='daylight'>
                <h1>Lights On!</h1>
                <img src={require('./lamp.svg')} alt='lightbulb icon' />
            </div>
            )
        } else if (!this.props.isActive) {
            roomStatus = (
                <div className='night'>
                <h1 style={{color: 'white'}}>Lights Off!</h1>
                <img src={require('./night.svg')} alt='lightbulb icon' />
                <br />
                <br />
            </div>
            )
        }
        return (
            <div className="room-container">
                {roomStatus}
            </div>
        )
    }
}

export default Light;