let repository = [
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

for ( i = 0; i < repository.length; i++) {
    if (repository[i].height === 1.7) {
        document.write(repository[i].name + ' ' + '(height: ' + repository[i].height + ')' + " - Wow, that's big!")
    } else {
        document.write("<p>" + repository[i].name + ' ' + '(height: ' + repository[i].height + ')' + "</p>");
    }
}
