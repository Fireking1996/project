const STORAGE_KEY = 'dracollum_timeline_events';

export function loadEvents() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveEvent(event) {
  const events = loadEvents();
  events.push(event);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function deleteEvent(id) {
  const events = loadEvents().filter(e => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}
