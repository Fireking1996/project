// js/character/character.js

const STORAGE_KEY = 'dracollum_characters';

export function getAllCharacters() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveCharacter(character) {
  const characters = getAllCharacters();
  character.id = character.id || Date.now().toString();
  const index = characters.findIndex(c => c.id === character.id);

  if (index > -1) {
    characters[index] = character; // Update
  } else {
    characters.push(character); // Create
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

export function deleteCharacter(id) {
  const characters = getAllCharacters().filter(c => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

export function getCharacterById(id) {
  return getAllCharacters().find(c => c.id === id);
}
