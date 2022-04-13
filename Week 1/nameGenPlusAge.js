const fetch = require('isomorphic-fetch');

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Unable to fetch data:', error);
  }
}

function fetchNames(nameType) {
  return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function generateName(gender) {
  try {
    const response = await Promise.all([
      fetchNames(gender || pickRandom(['male', 'female'])),
      fetchNames('surnames')
    ]);

    const [firstNames, lastNames] = response;

    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);
    const colourList = ['Orange', 'Yellow', 'Red', 'Green', 'Blue', 'Turquoise', 'Purple', 'Pink', 'White', 'Black']

    let randomColour = Math.floor(Math.random() * colourList.length);

    let colourRandom = colourList[Math.floor(Math.random() * colourList.length)];

    let myAge = Math.floor(Math.random() * 100);

    return `My Name Is ${firstName} ${lastName}, I Am ${myAge} And My Favourite Colour Is ${colourRandom}`;
  } catch (error) {
    console.error('Unable to generate name:', error);
  }
}

function logRandomName(gender) {
  generateName(gender).then(console.log);
}

logRandomName();