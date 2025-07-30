// js/app.js
import { getSampleDashboardData } from './modules/dashboard.js';
import { loadDashboard } from './dashboard.js';

document.addEventListener('DOMContentLoaded', () => {
  loadDashboard();
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('dashboard-cards');
  const sections = getSampleDashboardData();

  sections.forEach((section) => {
    const card = document.createElement('div');
    card.className = 'column is-one-third';

    card.innerHTML = `
      <div class="card">
        <div class="card-content">
          <h3 class="title is-5">${section.title}</h3>
          <p>${section.description}</p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
