let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "detailsURL" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("Pokemon is not corrent");
        }  
    }  
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);    
    }
    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        });
    }    
    function showDetails(pokemon) {
        console.log(pokemon.name)
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

