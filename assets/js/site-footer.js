(function () {
  const year = new Date().getFullYear();

  const STYLE = `
    .vg-site-footer{position:relative;overflow:hidden;border-top:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg,#050805 0%,#071007 48%,#020402 100%);color:#fff}
    .vg-site-footer::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 42%,rgba(134,216,61,.13),transparent 32rem),linear-gradient(180deg,transparent 0 54%,rgba(111,190,36,.07) 54% 55%,transparent 55%);pointer-events:none}
    .vg-site-footer__field{position:absolute;z-index:0;inset:auto 0 0;height:16rem;pointer-events:none;opacity:.9}
    .vg-site-footer__field::before{content:"";position:absolute;inset:auto -8% 0;height:9rem;background:linear-gradient(180deg,rgba(7,16,7,.08),rgba(0,0,0,.96));clip-path:polygon(0 68%,10% 60%,22% 65%,34% 53%,46% 61%,58% 50%,70% 57%,83% 48%,100% 56%,100% 100%,0 100%)}
    .vg-site-footer__field::after{content:"";position:absolute;left:6%;right:6%;bottom:6.3rem;height:1px;background:linear-gradient(90deg,transparent,rgba(169,239,97,.44),transparent);box-shadow:0 0 28px rgba(111,190,36,.32)}
    .vg-site-footer__fog{position:absolute;left:0;right:0;bottom:5.4rem;height:3rem;background:radial-gradient(ellipse at 34% 50%,rgba(255,255,255,.08),transparent 22rem),radial-gradient(ellipse at 74% 42%,rgba(169,239,97,.1),transparent 20rem);filter:blur(10px)}
    .vg-site-footer__inner{position:relative;z-index:1;margin:0 auto;display:grid;max-width:80rem;gap:2.5rem;padding:4rem 1.25rem 5.5rem}
    .vg-site-footer__brand{max-width:28rem}
    .vg-site-footer__logo{color:#fff;text-decoration:none;font-size:1.5rem;font-weight:900;letter-spacing:-.025em}
    .vg-site-footer__logo span{color:#86d83d}
    .vg-site-footer__text{margin-top:1rem;color:rgba(255,255,255,.58);line-height:1.75}
    .vg-site-footer__grid{display:grid;gap:2rem}
    .vg-site-footer__eyebrow{font-size:.72rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:#a9ef61}
    .vg-site-footer__links{margin-top:1rem;display:grid;gap:.55rem}
    .vg-site-footer__links a{color:rgba(255,255,255,.62);font-size:.92rem;text-decoration:none;transition:color .18s ease}
    .vg-site-footer__links a:hover{color:#fff}
    .vg-site-footer__bottom{position:relative;z-index:1;margin:0 auto;display:flex;max-width:80rem;flex-direction:column;gap:.75rem;border-top:1px solid rgba(255,255,255,.1);padding:1.25rem;color:rgba(255,255,255,.42);font-size:.78rem}
    @media (min-width:768px){.vg-site-footer__inner{grid-template-columns:1fr auto auto}.vg-site-footer__grid{grid-template-columns:repeat(2,minmax(9rem,auto))}.vg-site-footer__bottom{flex-direction:row;justify-content:space-between}}
  `;

  const HTML = `
    <footer class="vg-site-footer">
      <div class="vg-site-footer__field" aria-hidden="true"><span class="vg-site-footer__fog"></span></div>
      <div class="vg-site-footer__inner">
        <div class="vg-site-footer__brand">
          <a href="/index.html" class="vg-site-footer__logo">Vita<span>Guardia</span></a>
          <p class="vg-site-footer__text">Preparacion domestica y equipamiento de emergencia organizado por escenarios reales, sin alarmismo y con compra consciente.</p>
        </div>

        <div class="vg-site-footer__grid">
          <div>
            <p class="vg-site-footer__eyebrow">Navegacion</p>
            <div class="vg-site-footer__links">
              <a href="/pages/generador.html">Generador</a>
              <a href="/pages/equipamiento/index.html">Equipamiento</a>
              <a href="/pages/venta.html">Mi kit</a>
              <a href="/index.html#newsletter">Recursos</a>
            </div>
          </div>

          <div>
            <p class="vg-site-footer__eyebrow">Tiendas</p>
            <div class="vg-site-footer__links">
              <a href="/pages/equipamiento/supervivencia-casa.html">Supervivencia en casa</a>
              <a href="/pages/equipamiento/supervivencia-urbana.html">Supervivencia urbana</a>
              <a href="/pages/equipamiento/seguridad-privada.html">Seguridad privada</a>
              <a href="/pages/equipamiento/soldado-espanol.html">Soldado espa&ntilde;ol</a>
            </div>
          </div>
        </div>

        <div>
          <p class="vg-site-footer__eyebrow">Legal</p>
          <div class="vg-site-footer__links">
            <a href="/pages/legal/privacidad.html">Privacidad</a>
            <a href="/pages/legal/cookies.html">Cookies</a>
            <a href="/pages/legal/afiliados.html">Afiliados</a>
            <a href="/pages/legal/aviso-legal.html">Aviso legal</a>
            <a href="/contacto.html">Contacto</a>
          </div>
        </div>
      </div>
      <div class="vg-site-footer__bottom">
        <p>&copy; ${year} VitaGuardia. Preparacion con criterio.</p>
        
      </div>
    </footer>
  `;

  function ensureStyles() {
    if (document.querySelector('#vgSiteFooterStyles')) return;
    const style = document.createElement('style');
    style.id = 'vgSiteFooterStyles';
    style.textContent = STYLE;
    document.head.appendChild(style);
  }

  function renderFooter() {
    ensureStyles();
    const currentFooter = document.querySelector('footer');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = HTML.trim();
    const footer = wrapper.firstElementChild;

    if (currentFooter) {
      currentFooter.replaceWith(footer);
      return;
    }

    document.body.insertBefore(footer, document.body.querySelector('script') || null);
  }

  renderFooter();
})();
