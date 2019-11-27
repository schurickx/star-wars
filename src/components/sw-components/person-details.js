import React from 'react';
import ItemDetails, {Record} from '../item-details/';
import {withSwapiServise} from './../hoc-helpers';

const PersonDetails = (props) => {

        return (
        <ItemDetails {...props} >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPersone,
        getImageUrl: swapiService.getImagePeople
    }
}

export default withSwapiServise(mapMethodsToProps)(PersonDetails);