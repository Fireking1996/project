const STORAGE_KEY = 'dracollum_lore_entries';

export function loadLoreEntries() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveLoreEntry(entry) {
  const entries = loadLoreEntries();
  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function deleteLoreEntry(id) {
  const entries = loadLoreEntries().filter(entry => entry.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
