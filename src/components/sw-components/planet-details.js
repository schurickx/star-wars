import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiServise} from './../hoc-helpers';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diametr" />
        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getImagePlanet
    }
}

export default withSwapiServise(mapMethodToProps)(PlanetDetails);