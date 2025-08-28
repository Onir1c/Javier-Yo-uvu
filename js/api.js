export const API = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}`);
  }
  const data = await res.json();
  return data.results;
};
