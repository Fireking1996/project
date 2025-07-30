const API_URL = 'https://api.api-ninjas.com/v1/fantasyname';
const API_KEY = 'W5KrOOH9HO99ER5KSEYw/g==GUE7ZN1dy01W8Mut'; // Class project use only

export async function getName(category, gender) {
  const url = `${API_URL}?category=${category}&gender=${gender}`;
  const res = await fetch(url, {
    headers: { 'X-Api-Key': API_KEY }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch name');
  }

  const data = await res.json();
  return data.name;
}
