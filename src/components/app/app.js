import React, { Component } from 'react';

import Header from './../header';
import RandomPlanet from './../random-planet';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundary from '../error-boundary';
import DummySwapiService from './../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from './../pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

import './app.css'

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false

    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            }
        });
    }

    render() {

        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet updateInterval={10000} />
                            <Switch>
                                <Route path="/"
                                    render={() => <h2>Welcome to StarDB</h2>}
                                    exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetsPage} />
                                <Route path="/starships" exact component={StarshipsPage} />
                                <Route path="/starships/:id"
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }} />
                                <Route path="/login"
                                    render={() => (
                                        <LoginPage isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin} />
                                    )} />
                                <Route path="/secret"
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn} />
                                    )} />
                                <Redirect to="/" />
                                <Route render={() => <h2>Page not found</h2> } />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
