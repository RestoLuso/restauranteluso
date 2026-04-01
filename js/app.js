document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('menu-container');
  if (!container) return;
  fetch('menu-data.json')
    .then(res => { if (!res.ok) throw new Error('Network response was not ok'); return res.json(); })
    .then(data => {
      container.innerHTML = data.items.map(item => `
        <article class="menu-item" role="article" aria-label="${item.name}">
          <img src="images/${item.image}" alt="${item.name}" class="menu-img">
          <div>
            <div class="menu-name">${item.name}</div>
            <div class="menu-desc">${item.description}</div>
            <div class="menu-price">€${item.price}</div>
          </div>
        </article>
      `).join('');
    })
    .catch(err => {
      container.innerHTML = '<div style="color:#c00">Unable to load menu.</div>';
      console.error('Menu load error:', err);
    });
});
