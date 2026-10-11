<div align="center">

# Guilherme Caramori · Portfolio

### Desenvolvimento full stack, com atenção ao produto e ao detalhe.

Meu espaço na web para compartilhar projetos, experiência e as decisões por trás do código.

[![Next.js](https://img.shields.io/badge/Next.js-16-111111?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**[Visite o portfólio ↗](https://www.guilhermecaramori.com.br)** · [Versão em inglês](https://www.guilhermecaramori.com.br/en) · [LinkedIn](https://linkedin.com/in/gcaramori)

</div>

---

## 👋 Prazer, Guilherme

Sou desenvolvedor full stack sênior e trabalho com produtos web, dashboards, e-commerce, integrações e sistemas de negócio. Este repositório reúne o código do meu portfólio pessoal e os estudos de caso que ajudam a contar essa trajetória.

A proposta é dar espaço ao que interessa em cada projeto: o contexto, as escolhas técnicas e os resultados. A interface combina tipografia editorial, tons quentes e animações discretas, com conteúdo em português e inglês.

## ✨ Explore o site

- **Projetos com contexto:** páginas individuais com visão geral, tecnologias e resultados.
- **Trajetória profissional:** experiência, forma de trabalhar e apresentação pessoal.
- **Duas línguas:** rotas em português e inglês, com alternância de idioma.
- **Currículo à mão:** versão web, impressão pelo navegador e download em PDF nos dois idiomas.
- **Conteúdo para entrevistas:** guia de preparação internacional com busca, checklist e progresso salvo no navegador.
- **Compartilhamento:** metadados por página, Open Graph, sitemap e URLs alternativas por idioma.

| Quer conhecer… | Acesse |
| --- | --- |
| Os projetos | [Projetos](https://www.guilhermecaramori.com.br/projects) |
| Minha trajetória | [Sobre](https://www.guilhermecaramori.com.br/about) |
| A experiência profissional | [Currículo](https://www.guilhermecaramori.com.br/resume) |

## 🛠️ Por trás da interface

| Tecnologia | Uso no projeto |
| --- | --- |
| Next.js 16 + React 19 | Páginas e rotas com App Router |
| TypeScript | Tipagem dos componentes e conteúdos |
| Tailwind CSS 4 | Estilos e layout responsivo |
| Framer Motion | Animações de entrada e transições |
| Lucide + Radix UI | Ícones e tooltips |
| React Markdown + remark-gfm | Renderização dos materiais de entrevistas |
| Three.js + React Three Fiber + Drei | Componentes e assets 3D presentes no repositório |

## 🚀 Rode na sua máquina

Use Node.js **22.18+** e npm. Os scripts auxiliares em TypeScript também usam essa versão mínima.

```bash
git clone https://github.com/gcaramori/portfolio.git
cd portfolio
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento com Turbopack |
| `npm run build` | Gera o build de produção |
| `npm run start` | Serve o build de produção localmente |
| `npm run lint` | Executa o ESLint |
| `npm run resume:pdf` | Gera os currículos em português e inglês |
| `npm run guide:check` | Verifica as interações do guia de entrevistas |

Para testar a versão de produção, execute `npm run build` e depois `npm run start`.

## 📂 Mapa do projeto

```text
app/          → Páginas, rotas em inglês e metadados de navegação
components/   → Interface organizada por funcionalidade
contexts/     → Estado compartilhado de idioma
lib/          → Conteúdo, projetos, localização, SEO e utilitários
content/      → Materiais de preparação para entrevistas
public/       → Imagens, currículos em PDF e arquivos 3D
scripts/      → Geração de PDFs e verificação do guia
```

Para atualizar os textos e estudos de caso, comece por `lib/languages.ts` e `lib/projects.ts`. As imagens dos projetos ficam em `public/projects/`.

## 📄 Atualizando os currículos

Os PDFs são gerados a partir das páginas `/resume` e `/en/resume`, usando os estilos de impressão do site. Depois de alterar o conteúdo, gere novamente os dois arquivos antes de publicar.

Com **Microsoft Edge instalado** e o site rodando em outro terminal (`npm run dev` ou `npm run start`):

```bash
npm run resume:pdf
```

Os arquivos são salvos em `public/resume/` e devem acompanhar a atualização do conteúdo no repositório. O download no site usa esses PDFs, sem geração no servidor.

Para usar outro endereço local ou navegador Chromium, configure `RESUME_BASE_URL` e `RESUME_BROWSER_PATH`. Exemplo no PowerShell:

```powershell
$env:RESUME_BASE_URL = 'http://localhost:3001'
$env:RESUME_BROWSER_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
npm run resume:pdf
```

Os links internos dos PDFs apontam para `https://www.guilhermecaramori.com.br` por padrão. Use `RESUME_PUBLIC_URL` para alterar apenas o destino desses links.

Confira texto selecionável, acentos, links e quebras de página nos dois arquivos. A impressão pelo navegador também está disponível no site.

## 🎯 Guia de entrevistas internacionais

A página `/guia-entrevistas-internacionais` é acessada por link direto. O guia e os sete materiais complementares usam os documentos versionados em `content/entrevistas/`; a pasta local `preparacao-carreira/` não é usada pelo deploy.

A interface e o conteúdo estão em português, com exemplos em inglês. O progresso dos dias e do checklist fica apenas no navegador.

Com o servidor rodando, execute:

```bash
npm run guide:check
```

A verificação cobre busca, progresso, links, clipboard e comportamento responsivo. Requer Microsoft Edge e Node.js 22.18+. Para outro endereço ou navegador Chromium, defina `GUIDE_BASE_URL` e `GUIDE_BROWSER_PATH`.

## 🤝 Vamos conversar

Tem um projeto em mente ou uma oportunidade para trocar ideia?

[LinkedIn](https://linkedin.com/in/gcaramori) · [E-mail](mailto:gcaramori16@gmail.com) · [GitHub](https://github.com/gcaramori)
