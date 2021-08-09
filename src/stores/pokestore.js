import { writable } from 'svelte/store';

//Import algolia client 'lite' version (search only)
import algoliasearch from 'algoliasearch';
const client = algoliasearch('TM6R82PC2M', 'df95ebaff994eda3d92c4fa90ca8b371');

export const pokemon = writable([]);
const pokemonDetails = {};

/*
//Original function to fetch directly from pokeapi
export const fetchPokemon = async () => {
	if (loaded) return;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
	pokemon.set(loadedPokemon);
	loaded = true;
};
*/

export const fetchPokemon = async (query) => {
    const index = client.initIndex('pokemon');
    const res = await index.search(query,{ hitsPerPage: 150});
	pokemon.set(res.hits);
};

export const getPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};
