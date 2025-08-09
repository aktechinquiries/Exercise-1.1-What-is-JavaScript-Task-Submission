let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Bulbasaur", 
            height: 0.7, 
            type: ["grass","poison"]
        },
        {
            name: "Charizard", 
            height: 1.7, 
            type: ["fire","flying"]
        },
        {
            name: "Butterfree", 
            height: 1.1, 
            type: ["bug","fyling"]
        }
    ];
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
    function showDetails(pokemon) {
        console.log(pokemon.name)
    }
    return {
        add: function(){
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        },
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

