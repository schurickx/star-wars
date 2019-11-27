class SwapiService {

    _apiBase = 'https://swapi.co/api/';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , received ${res.status}`)
        }
        return res.json();
    };

    async getAllPeople() {
        const res = await this.getResource('people/');
        return res.results;
    }

    getPersone (id) {
        return this.getResource(`people/${id}`)
    }

    async getAllPlanets () {
        const res = await this.getResource('planets/');
        return res.results;
    }

    getPlanet (id) {
        return this.getResource(`planets/${id}`)
    }

    async getAllStarships () {
        const res = await this.getResource('starships/');
        return res.results;
    }

    getStarship (id) {
        return this.getResource(`starships/${id}`)
    }

}

const swapi = new SwapiService();
swapi.getPersone(3).then((people) => {
   console.log(people.name);
   
});



// getResource('https://swapi.co/api/people/14234234/')
//     .then( (body) => console.log(body) )
//     .catch( (err) => console.error(err) )