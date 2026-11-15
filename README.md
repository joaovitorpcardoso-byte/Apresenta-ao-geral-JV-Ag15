# Portfólio Pessoal

**Aluno:** João Vitor Pellegrini Cardoso

## Descrição
Portfólio pessoal de João Vitor, estudante de Análise e Desenvolvimento de Sistemas, com apresentação do meu perfil, minhas habilidades, meus projetos e formas de contato. É a evolução do projeto feito em aula, com novo visual e novos recursos.

## Tecnologias utilizadas
- HTML5
- CSS3 (variáveis CSS, transições)
- Bootstrap 5.3 (grid, navbar, carousel, formulário)
- JavaScript (IntersectionObserver e localStorage)
- GitHub Pages

## Link do site publicado
https://joaovitorpcardoso-byte.github.io/portfolio/

## Como o projeto funciona
- **Menu de navegação:** navbar do Bootstrap fixa no topo, com links âncora para Perfil, Habilidades, Projetos e Contato. A rolagem é suave.
- **Perfil:** apresentação com foto, texto e botões de ação.
- **Projetos:** carousel do Bootstrap que leva ao meu GitHub, onde estão publicados os projetos.
- **Contato:** dados de contato e formulário que abre o e-mail do visitante.
- **Responsividade:** o layout usa o grid do Bootstrap e se adapta a celular e desktop.

## Recursos novos adicionados
1. **Seção de Habilidades com barras animadas.** As barras são preenchidas quando o visitante rola a página até a seção.
2. **Modo claro e escuro.** Um botão no menu troca o tema, e o site lembra a escolha na próxima visita.
3. **Melhorias visuais no carousel.** Legenda sobre a imagem com degradê e leve zoom na imagem do slide ativo.

## Como os recursos foram implementados
- **Barras de habilidades:** cada barra (`.skill-bar`) guarda o nível em `data-nivel`. No `script.js`, um `IntersectionObserver` detecta quando a barra aparece na tela e define a largura. O CSS usa `transition: width` para animar o preenchimento.
- **Tema claro/escuro:** as cores ficam em variáveis CSS (`--bg`, `--ink`, `--accent`...). O atributo `data-bs-theme` no `<html>` troca os valores das variáveis e também o tema do Bootstrap. O JavaScript alterna o atributo ao clicar no botão e guarda a escolha no `localStorage`.
- **Carousel:** a legenda usa `position: absolute` com `linear-gradient`, e o zoom usa `transform: scale()` com `transition` na imagem do `.carousel-item.active`.

## Como publicar
Repositório > Settings > Pages > Branch `main` / pasta `root` > Save.
