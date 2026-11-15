// 1) Barras de habilidades: preenchem quando a seção aparece na tela
const barras = document.querySelectorAll('.skill-bar');
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.nivel + '%';
      observador.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
barras.forEach((b) => observador.observe(b));

// 2) Tema claro/escuro com memória da escolha
const botao = document.getElementById('tema');
const html = document.documentElement;
function aplicarTema(tema) {
  html.setAttribute('data-bs-theme', tema);
  botao.textContent = tema === 'dark' ? 'Tema claro' : 'Tema escuro';
}
let salvo = 'light';
try { salvo = localStorage.getItem('tema') || 'light'; } catch (e) {}
aplicarTema(salvo);
botao.addEventListener('click', () => {
  const novo = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  aplicarTema(novo);
  try { localStorage.setItem('tema', novo); } catch (e) {}
});
