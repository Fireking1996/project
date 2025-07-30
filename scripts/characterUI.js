// js/character/characterUI.js
import { getAllCharacters, saveCharacter, deleteCharacter } from './character.js';

export function renderCharacterList(container) {
  const characters = getAllCharacters();
  container.innerHTML = characters.map(characterTemplate).join('');
  attachDeleteListeners(container);
}

function characterTemplate(char) {
  return `
    <div class="box">
      <h3 class="title is-5">${char.name}</h3>
      <p><strong>Race:</strong> ${char.race} | <strong>Role:</strong> ${char.role}</p>
      <p>${char.description}</p>
      <button class="button is-small is-danger" data-id="${char.id}">Delete</button>
    </div>
  `;
}

function attachDeleteListeners(container) {
  container.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      deleteCharacter(btn.dataset.id);
      renderCharacterList(container);
    });
  });
}

export function setupCharacterForm(form, container) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    saveCharacter(data);
    form.reset();
    renderCharacterList(container);
  });
}
