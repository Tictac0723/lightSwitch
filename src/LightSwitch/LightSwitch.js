import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Light from '../Light/Light.js';
// import './Switch.css';

class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    handleChange = active => event => {
        let isActive = event.target.checked;
        this.setState({ [active]: isActive});
        this.props.setActive(isActive);
    }

    render () {
        return (
            <div className="light-switch-container">
                <Switch
                    checked={this.state.active}
                    onChange={this.handleChange('active')}
                    value='active'
                />
                <Light isActive={this.state.active}/>
            </div>
        )
    }
}

export default LightSwitch;