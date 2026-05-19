(function () {
  const buttons = Array.from(document.querySelectorAll('[data-guide-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-guide-category]'));
  const emptyState = document.querySelector('#guideEmpty');

  if (!buttons.length || !cards.length) return;

  function setFilter(category) {
    let visibleCount = 0;

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.guideFilter === category));
    });

    cards.forEach((card) => {
      const categories = (card.dataset.guideCategory || '').split(/\s+/).filter(Boolean);
      const shouldShow = category === 'todo' || categories.includes(category);
      card.classList.toggle('hidden', !shouldShow);
      if (shouldShow) visibleCount += 1;
    });

    if (emptyState) emptyState.classList.toggle('hidden', visibleCount > 0);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => setFilter(button.dataset.guideFilter));
  });
})();
