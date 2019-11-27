//Старый вариант через ПРОМИСЫ
fetch('https://swapi.co/api/people/1/') // fetch возвращет промис, который вернёт объект response
    .then((res) => res.json())          // response не обязательно содержит весь ответ сервера, т.е. тела ещё может не быть. Здесь получаем JSON из ответа
    .then ((body) => console.log(body))

// Теперь тоже самое,но с помощью ASINC AWAIT

const getResource = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
};

getResource('https://swapi.co/api/people/1/')
    .then( (body) => console.log(body) )