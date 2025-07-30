import { deleteEvent, loadEvents } from './timelineData.js';

export function renderTimeline(events, container) {
  container.innerHTML = '';
  if (events.length === 0) {
    container.innerHTML = '<p class="has-text-grey has-text-centered">No timeline events yet.</p>';
    return;
  }

  events.sort((a, b) => a.date.localeCompare(b.date)).forEach((event, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
      <div class="timeline-marker is-${colorByCategory(event.category)}"></div>
      <div class="timeline-content">
        <p class="heading">${event.date} — ${event.category}</p>
        <p><strong>${event.title}</strong></p>
        <p>${event.description}</p>
        <button class="button is-danger is-small mt-2">Delete</button>
      </div>
    `;

    item.querySelector('button').addEventListener('click', () => {
      deleteEvent(event.id);
      renderTimeline(loadEvents(), container);
    });

    container.appendChild(item);
  });
}

function colorByCategory(category) {
  const colors = {
    War: 'danger',
    Discovery: 'info',
    Birth: 'success',
    Death: 'dark',
    Other: 'primary'
  };
  return colors[category] || 'primary';
}

export function clearForm(form) {
  form.reset();
}
