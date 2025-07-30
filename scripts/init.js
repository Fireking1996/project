import { loadLoreEntries, saveLoreEntry } from './loreData.js';
import { renderLoreEntries, clearForm } from './loreUI.js';

document.addEventListener('DOMContentLoaded', () => {
  const loreForm = document.getElementById('loreForm');
  const loreList = document.getElementById('loreList');

  // Initial render
  const entries = loadLoreEntries();
  renderLoreEntries(entries, loreList);

  // Form submission
  loreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loreForm);
    const newEntry = {
      id: Date.now(),
      title: formData.get('title'),
      category: formData.get('category'),
      content: formData.get('content'),
    };
    saveLoreEntry(newEntry);
    renderLoreEntries(loadLoreEntries(), loreList);
    clearForm(loreForm);
  });
});
