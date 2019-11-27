import React, { Component } from 'react';
import Row from './../row/index';
import { PlanetList, PlanetDetails } from '../sw-components';

class PlanetsPage extends Component {

    state = {
        onItemSelected: null
    }

    onItemSelected = (onItemSelected) => {
        this.setState({ onItemSelected })
    }

    render() {
        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={this.state.onItemSelected} />} />
        );
    }
}

export default PlanetsPage;