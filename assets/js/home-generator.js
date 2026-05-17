(function () {
  const form = document.querySelector('#kitForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const people = document.querySelector('#people').value;
    const pets = document.querySelector('#pets').value;
    const zone = document.querySelector('#zone').value;
    const budget = document.querySelector('#budget').value;
    const params = new URLSearchParams({ people, pets, zone, budget });

    window.location.href = `pages/generador.html?${params.toString()}`;
  });
})();
