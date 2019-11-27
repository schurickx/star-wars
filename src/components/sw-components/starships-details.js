import React from 'react';
import ItemDetails, {Record} from '../item-details';
import { withSwapiServise } from '../hoc-helpers';


const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <Record field="model" label="Мodel" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />

        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getImageStarship
    }
}

export default withSwapiServise(mapMethodToProps)(StarshipDetails) ;