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
})();


for ( i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height === 1.7) {
        document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ')' + " - Wow, that's big!")
    } else {
        document.write("<p>" + pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ')' + "</p>");
    }
}
