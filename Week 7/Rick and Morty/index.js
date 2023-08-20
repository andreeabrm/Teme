function fetchUrl(url) {
  return fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .catch(error => {
          console.error('Error:', error);
      });
}

function getAllEpisodes() {
  const apiUrl = 'https://rickandmortyapi.com/api/episode';

  return fetchUrl(apiUrl)
      .then(data => {
          return data.results;
      });
}

function getEpisodeById(episodeId) {
  const apiUrl = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  return fetchUrl(apiUrl)
      .then(data => {
          return data;
      });
}

document.addEventListener('DOMContentLoaded', function() {
  const allEpisodesButton = document.getElementById('allEpisodesButton');
  const episode1Button = document.getElementById('episode1Button');
  const episode2Button = document.getElementById('episode2Button');
  const episode3Button = document.getElementById('episode3Button');

  allEpisodesButton.addEventListener('click', function() {
      getAllEpisodes().then(episodes => {
          console.log('All Episodes:', episodes);
      });
  });

  episode1Button.addEventListener('click', function() {
      getEpisodeById(1).then(episode => {
          console.log('Episode 1:', episode);
      });
  });

  episode2Button.addEventListener('click', function() {
      getEpisodeById(2).then(episode => {
          console.log('Episode 2:', episode);
      });
  });

  episode3Button.addEventListener('click', function() {
      getEpisodeById(3).then(episode => {
          console.log('Episode 3:', episode);
      });
  });
});

function getAllLocations() {
  const apiUrl = 'https://rickandmortyapi.com/api/location';

  return fetchUrl(apiUrl)
      .then(data => {
          return data.results;
      });
}

function getLocationById(locationId) {
  const apiUrl = `https://rickandmortyapi.com/api/location/${locationId}`;

  return fetchUrl(apiUrl)
      .then(data => {
          return data;
      });
}

document.addEventListener('DOMContentLoaded', function() {
  const allLocationsButton = document.getElementById('allLocationsButton');
  const location1Button = document.getElementById('location1Button');
  const location2Button = document.getElementById('location2Button');
  const location3Button = document.getElementById('location3Button');

  allLocationsButton.addEventListener('click', function() {
      getAllLocations().then(locations => {
          console.log('All Locations:', locations);
      });
  });

  location1Button.addEventListener('click', function() {
      getLocationById(1).then(location => {
          console.log('Location 1:', location);
      });
  });

  location2Button.addEventListener('click', function() {
      getLocationById(2).then(location => {
          console.log('Location 2:', location);
      });
  });

  location3Button.addEventListener('click', function() {
      getLocationById(3).then(location => {
          console.log('Location 3:', location);
      });
  });
});

function fetchUrl(url) {
return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function getAllCharacters() {
const apiUrl = 'https://rickandmortyapi.com/api/character';

return fetchUrl(apiUrl)
  .then(data => {
    return data.results;
  });
}

function getCharacterById(characterId) {
const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

return fetchUrl(apiUrl)
  .then(data => {
    return data;
  });
}

document.addEventListener('DOMContentLoaded', function() {
const allCharactersButton = document.getElementById('allCharactersButton');
const character1Button = document.getElementById('character1Button');
const character2Button = document.getElementById('character2Button');
const character3Button = document.getElementById('character3Button');

allCharactersButton.addEventListener('click', function() {
  getAllCharacters().then(characters => {
    console.log('All Characters:', characters);
  });
});

character1Button.addEventListener('click', function() {
  getCharacterById(1).then(character => {
    console.log('Character 1:', character);
  });
});

character2Button.addEventListener('click', function() {
  getCharacterById(2).then(character => {
    console.log('Character 2:', character);
  });
});

character3Button.addEventListener('click', function() {
  getCharacterById(3).then(character => {
    console.log('Character 3:', character);
  });
});
});