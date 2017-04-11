
var ul = document.getElementById('main');

fetch('https://pokeapi.co/api/v2/pokemon/').then(function(response){
	response.json().then(function(jsonList){
		var pokeList = jsonList.results;		
		//renderPokemons(pokeList);
		pokeList.forEach(function(pokeData){
			fetch(pokeData.url).then(function(pokeDataResponse){				
				var jsonResult = pokeDataResponse.json();				
				jsonResult.then(function(pokeJson){
					console.log(pokeJson);
					renderPokemon(pokeJson);					
				});				
			});
		});
	})
});

function renderPokemons(pokeList) {
	pokeList.forEach(function(pokemon){
		var li = document.createElement('li');
		li.innerHTML = pokemon.name + ';' + pokemon.url;
		ul.appendChild(li);
	});	
};

function renderPokemon(pokemon){
	var li = document.createElement('li');
	li.innerHTML = pokemon.name;
	ul.appendChild(li);
	var img = document.createElement('img');
	img.setAttribute('src', pokemon.sprites.front_default);
	li.appendChild(img);
};