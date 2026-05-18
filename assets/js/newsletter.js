(function () {
  const storageKey = 'vitaguardia_demo_newsletter';
  const forms = [
    document.querySelector('#newsletterForm'),
    document.querySelector('#saleNewsletterForm')
  ].filter(Boolean);

  if (!forms.length) return;

  async function subscribe(form) {
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button');
    const email = input.value.trim().toLowerCase();
    const originalText = button.textContent;

    const subscribers = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const nextSubscribers = subscribers.filter((subscriber) => subscriber.email !== email);
    nextSubscribers.push({
      email,
      source: form.id || 'web',
      savedAt: new Date().toISOString()
    });
    localStorage.setItem(storageKey, JSON.stringify(nextSubscribers));

    form.reset();
    button.disabled = true;
    button.textContent = 'Guardado en demo';

    setTimeout(() => {
      button.disabled = false;
      button.textContent = originalText;
    }, 2200);
  }

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      subscribe(form);
    });
  });
})();
