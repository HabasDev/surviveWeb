(function () {
  const storageKey = 'vitaguardia_demo_newsletter';
  const cooldownKey = 'vitaguardia_newsletter_last_submit';
  const cooldownMs = 60 * 1000;
  const maxStoredSubscribers = 50;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const forms = [
    document.querySelector('#newsletterForm'),
    document.querySelector('#saleNewsletterForm')
  ].filter(Boolean);

  if (!forms.length) return;

  function readJson(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      return value || fallback;
    } catch {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function getButton(form) {
    return form.querySelector('button');
  }

  function getStatus(form) {
    let status = form.querySelector('[data-newsletter-status]');
    if (status) return status;

    status = document.createElement('p');
    status.dataset.newsletterStatus = 'true';
    status.setAttribute('aria-live', 'polite');
    status.className = 'text-sm font-bold text-white/65 sm:col-span-2';
    form.appendChild(status);
    return status;
  }

  function setStatus(form, message, tone) {
    const status = getStatus(form);
    const color = tone === 'error' ? 'text-red-300' : tone === 'success' ? 'text-survival-300' : 'text-white/65';
    status.className = `text-sm font-bold ${color} sm:col-span-2`;
    status.textContent = message;
  }

  function getRemainingCooldown() {
    const lastSubmit = Number(localStorage.getItem(cooldownKey) || 0);
    return Math.max(0, cooldownMs - (Date.now() - lastSubmit));
  }

  function refreshCooldown(form) {
    const button = getButton(form);
    if (!button) return;

    button.dataset.originalText = button.dataset.originalText || button.textContent;
    const remaining = getRemainingCooldown();

    if (remaining > 0) {
      button.disabled = true;
      button.textContent = `Espera ${Math.ceil(remaining / 1000)}s`;
      return;
    }

    button.disabled = false;
    button.textContent = button.dataset.originalText;
  }

  function refreshAllCooldowns() {
    forms.forEach(refreshCooldown);
  }

  function isBotLikeSubmission(form) {
    return Array.from(form.querySelectorAll('input[name="website"], input[name="company"]'))
      .some((input) => input.value.trim().length > 0);
  }

  function normalizeEmail(input) {
    return input.value.trim().toLowerCase().slice(0, 254);
  }

  function isValidEmail(input, email) {
    return email.length <= 254 && emailPattern.test(email) && input.checkValidity();
  }

  function saveSubscriber(email, source) {
    const subscribers = readJson(storageKey, []);
    const list = Array.isArray(subscribers) ? subscribers : [];
    const nextSubscribers = list.filter((subscriber) => subscriber.email !== email);

    nextSubscribers.push({
      email,
      source,
      savedAt: new Date().toISOString()
    });

    const trimmedSubscribers = nextSubscribers.slice(-maxStoredSubscribers);
    return safeSet(storageKey, JSON.stringify(trimmedSubscribers));
  }

  function startCooldown() {
    safeSet(cooldownKey, String(Date.now()));
    refreshAllCooldowns();
  }

  function subscribe(form) {
    const input = form.querySelector('input[type="email"]');
    if (!input) return;

    const remaining = getRemainingCooldown();
    if (remaining > 0) {
      setStatus(form, `Espera ${Math.ceil(remaining / 1000)} segundos antes de volver a intentarlo.`, 'error');
      refreshCooldown(form);
      return;
    }

    if (isBotLikeSubmission(form)) {
      startCooldown();
      form.reset();
      setStatus(form, 'Guardado en demo.', 'success');
      return;
    }

    const email = normalizeEmail(input);
    input.value = email;

    if (!isValidEmail(input, email)) {
      setStatus(form, 'Introduce un correo electronico valido.', 'error');
      input.focus();
      return;
    }

    if (!saveSubscriber(email, form.id || 'web')) {
      setStatus(form, 'No se pudo guardar en este navegador. Revisa la privacidad o el almacenamiento local.', 'error');
      return;
    }

    form.reset();
    startCooldown();
    setStatus(form, 'Guardado en demo. Puedes volver a intentarlo dentro de 60 segundos.', 'success');
  }

  forms.forEach((form) => {
    form.setAttribute('novalidate', 'novalidate');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      subscribe(form);
    });
  });

  refreshAllCooldowns();
  window.setInterval(refreshAllCooldowns, 1000);
})();
