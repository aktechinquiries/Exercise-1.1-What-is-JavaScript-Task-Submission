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
    return {
        add: function(){
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        }
    }
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
});

