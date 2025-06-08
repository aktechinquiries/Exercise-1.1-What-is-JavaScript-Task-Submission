let pokemonList = [
    {name: "Bulbasaur", height: 0.7, type: ["grass","poison"]},
    {name: "Charizard", height: 1.7, type: ["fire","flying"]},
    {name: "Butterfree", height: 1.1, type: ["bug","fyling"]}
];

for ( i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ')' + "</p>");
}
