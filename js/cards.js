import { API } from "./api.js";

const $ = (id) => document.getElementById(id);

const container = $('cards-container');

 export const showPokemons = async () =>  {
    try {
      const pokemons = await API();

      const fetch = pokemons.map(p => fetch(p.url).then(res => res.json()));
      const results = await Promise.all(fetch);

      results.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <img src="${p.sprites.front_default}" alt="${p.name}">
          <h2>${p.name}</h2>
          <p>HP: ${p.stats[0].base_stat}</p>
          <p>Ataque: ${p.stats[1].base_stat}</p>
        `;

        container.appendChild(card);
      });

    } catch (error) {
      console.error("Error cargando Pokemon:", error);
    }
  }