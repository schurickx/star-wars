import React from 'react';
import ItemList from './../item-list';
import { 
    withData, 
    withSwapiServise, 
    withChildFunction, 
    compose } from '../hoc-helpers';





const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = compose(
                        withSwapiServise(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                        )(ItemList);

const PlanetList = compose(
                        withSwapiServise(mapPlanetsMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList);

const StarshipList = compose(
                        withSwapiServise(mapStarshipsMethodsToProps),
                        withData,
                        withChildFunction(renderNameAndModel)
                    )(ItemList);

                                        
export {
    PersonList, 
    PlanetList, 
    StarshipList
};