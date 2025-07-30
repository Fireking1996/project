// js/modules/dashboard.js
export function getSampleDashboardData() {
  return [
    {
      title: 'Recent Characters',
      description: 'View and edit your most recently created characters.'
    },
    {
      title: 'New Lore Entries',
      description: 'Keep track of new lore articles you’ve added.'
    },
    {
      title: 'Timeline Highlights',
      description: 'Major world events at a glance.'
    }
  ];
}

// js/dashboard.js

export async function loadDashboard() {
  const dashboard = document.querySelector('#dashboard');

  try {
    const [characters, lore] = await Promise.all([
      fetch('./data/characters.json').then((res) => res.json()),
      fetch('./data/lore.json').then((res) => res.json())
    ]);

    const characterCards = characters.map(createCharacterCard);
    const loreCards = lore.map(createLoreCard);

    dashboard.innerHTML = [...characterCards, ...loreCards].join('');
  } catch (error) {
    console.error('Failed to load dashboard content:', error);
    dashboard.innerHTML = `<div class="notification is-danger">Error loading content. Please try again later.</div>`;
  }
}

function createCharacterCard(char) {
  return `
    <div class="column is-full-mobile is-half-tablet is-one-third-desktop fade-in">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${char.image}" alt="${char.name}" onerror="this.src='images/placeholder.jpg'">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-5">${char.name}</p>
          <p class="subtitle is-6">${char.race} — ${char.role}</p>
          <p><strong>Affiliation:</strong> ${char.affiliation}</p>
          <p class="mt-2">${char.description}</p>
        </div>
      </div>
    </div>
  `;
}

function createLoreCard(entry) {
  return `
    <div class="column is-full-mobile is-half-tablet is-one-third-desktop fade-in">
      <div class="card">
        <div class="card-content">
          <p class="title is-5">${entry.title}</p>
          <p class="subtitle is-6">${entry.category}</p>
          <p>${entry.summary}</p>
        </div>
      </div>
    </div>
  `;
}
