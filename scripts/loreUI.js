import { deleteLoreEntry, loadLoreEntries } from './loreData.js';

export function renderLoreEntries(entries, container) {
  container.innerHTML = '';

  if (entries.length === 0) {
    container.innerHTML = `<p class="has-text-grey">No lore entries yet.</p>`;
    return;
  }

  entries.forEach(entry => {
    const article = document.createElement('article');
    article.className = 'box';

    article.innerHTML = `
      <h3 class="title is-5">${entry.title} <span class="tag is-light is-pulled-right">${entry.category}</span></h3>
      <p>${entry.content}</p>
      <button class="button is-small is-danger mt-3">Delete</button>
    `;

    const deleteBtn = article.querySelector('button');
    deleteBtn.addEventListener('click', () => {
      deleteLoreEntry(entry.id);
      renderLoreEntries(loadLoreEntries(), container);
    });

    container.appendChild(article);
  });
}

export function clearForm(form) {
  form.reset();
}
