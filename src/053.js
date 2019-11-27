
const getResource = async (url) => {
    const res = await fetch(url);
    // Создаем собственную ошибку, если страница не найдена например
    if (!res.ok) {
        throw new Error(`Could not fetch ${url} , received ${res.status}`)
    }
    const body = await res.json();
    return body;
};

getResource('https://swapi.co/api/people/14234234/')
    .then( (body) => console.log(body) )
    .catch( (err) => console.error(err) )