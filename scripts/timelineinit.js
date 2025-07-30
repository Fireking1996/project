import { loadEvents, saveEvent } from './timelineData.js';
import { renderTimeline, clearForm } from './timelineUI.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('timelineForm');
  const timeline = document.getElementById('timelineVisual');

  renderTimeline(loadEvents(), timeline);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const event = {
      id: Date.now(),
      title: data.get('title'),
      date: data.get('date'),
      category: data.get('category'),
      description: data.get('description')
    };
    saveEvent(event);
    renderTimeline(loadEvents(), timeline);
    clearForm(form);
  });
});
