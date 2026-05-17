(function () {
  const authModal = document.querySelector('#authModal');
  const openLogin = document.querySelector('#openLogin');
  const openRegister = document.querySelector('#openRegister');
  const closeAuth = document.querySelector('#closeAuth');
  const loginTab = document.querySelector('#loginTab');
  const registerTab = document.querySelector('#registerTab');
  const loginForm = document.querySelector('#loginForm');
  const registerForm = document.querySelector('#registerForm');
  const authMessage = document.querySelector('#authMessage');
  const guestActions = document.querySelector('#guestActions');
  const userActions = document.querySelector('#userActions');
  const userGreeting = document.querySelector('#userGreeting');
  const logoutBtn = document.querySelector('#logoutBtn');

  if (!authModal || !loginForm || !registerForm) return;

  let currentUser = null;

  const api = async (path, options = {}) => {
    const response = await fetch(path, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      credentials: 'same-origin',
      ...options
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.error || 'No se pudo completar la accion.');
    return body;
  };

  const showAuthMessage = (text, type = 'error') => {
    authMessage.textContent = text;
    authMessage.className = `mb-4 rounded-xl border px-4 py-3 text-sm font-bold ${type === 'success' ? 'border-survival-500/40 bg-survival-500/15 text-survival-300' : 'border-red-400/40 bg-red-500/15 text-red-200'}`;
  };

  const clearAuthMessage = () => {
    authMessage.textContent = '';
    authMessage.className = 'mb-4 hidden rounded-xl border px-4 py-3 text-sm font-bold';
  };

  const updateAuthState = () => {
    if (currentUser) {
      guestActions.classList.add('hidden');
      guestActions.classList.remove('flex');
      userActions.classList.remove('hidden');
      userActions.classList.add('flex');
      userGreeting.textContent = `Hola, ${currentUser.name}`;
      return;
    }

    guestActions.classList.remove('hidden');
    guestActions.classList.add('flex');
    userActions.classList.add('hidden');
    userActions.classList.remove('flex');
    userGreeting.textContent = '';
  };

  const loadSession = async () => {
    try {
      const data = await api('/api/me');
      currentUser = data.user;
      updateAuthState();
    } catch {
      currentUser = null;
      updateAuthState();
    }
  };

  const setAuthMode = (mode) => {
    clearAuthMessage();
    const isLogin = mode === 'login';
    loginForm.classList.toggle('hidden', !isLogin);
    registerForm.classList.toggle('hidden', isLogin);
    loginTab.className = isLogin
      ? 'rounded-lg bg-survival-500 px-4 py-2 text-sm font-black text-black'
      : 'rounded-lg px-4 py-2 text-sm font-black text-white/65 transition hover:text-white';
    registerTab.className = !isLogin
      ? 'rounded-lg bg-survival-500 px-4 py-2 text-sm font-black text-black'
      : 'rounded-lg px-4 py-2 text-sm font-black text-white/65 transition hover:text-white';
  };

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    authModal.classList.remove('hidden');
    authModal.classList.add('flex');
    setTimeout(() => (mode === 'login' ? document.querySelector('#loginEmail') : document.querySelector('#registerName')).focus(), 50);
  };

  const closeAuthModal = () => {
    authModal.classList.add('hidden');
    authModal.classList.remove('flex');
    loginForm.reset();
    registerForm.reset();
    clearAuthMessage();
  };

  openLogin.addEventListener('click', () => openAuthModal('login'));
  openRegister.addEventListener('click', () => openAuthModal('register'));
  closeAuth.addEventListener('click', closeAuthModal);
  loginTab.addEventListener('click', () => setAuthMode('login'));
  registerTab.addEventListener('click', () => setAuthMode('register'));

  authModal.addEventListener('click', (event) => {
    if (event.target === authModal) closeAuthModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !authModal.classList.contains('hidden')) closeAuthModal();
  });

  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const data = await api('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          name: document.querySelector('#registerName').value.trim(),
          email: document.querySelector('#registerEmail').value.trim().toLowerCase(),
          password: document.querySelector('#registerPassword').value
        })
      });

      currentUser = data.user;
      updateAuthState();
      showAuthMessage('Cuenta creada. Ya has iniciado sesion.', 'success');
      setTimeout(closeAuthModal, 900);
    } catch (error) {
      showAuthMessage(error.message);
    }
  });

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const data = await api('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          email: document.querySelector('#loginEmail').value.trim().toLowerCase(),
          password: document.querySelector('#loginPassword').value
        })
      });

      currentUser = data.user;
      updateAuthState();
      showAuthMessage('Sesion iniciada correctamente.', 'success');
      setTimeout(closeAuthModal, 700);
    } catch (error) {
      showAuthMessage(error.message);
    }
  });

  logoutBtn.addEventListener('click', async () => {
    await api('/api/logout', { method: 'POST' });
    currentUser = null;
    updateAuthState();
  });

  loadSession();
})();
