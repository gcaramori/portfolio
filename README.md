This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Currículos em PDF

Os currículos em português e inglês são gerados a partir das páginas
`/resume` e `/en/resume`, usando os estilos de impressão do site. Após mudar
o conteúdo do currículo, gere novamente os dois arquivos antes de publicar.

Requer Node.js 22.18+ e Microsoft Edge instalado. Com o site rodando em outro
terminal (`npm run dev` ou `npm run start`), execute:

```bash
npm run resume:pdf
```

Os PDFs são salvos em `public/resume/` e devem acompanhar a atualização do
conteúdo no repositório. O download não depende de geração no servidor.

Para outro endereço local ou navegador Chromium, configure
`RESUME_BASE_URL` e `RESUME_BROWSER_PATH`. Os links internos dos PDFs usam
`https://www.guilhermecaramori.com.br` por padrão; `RESUME_PUBLIC_URL`
permite alterar apenas o destino dos links. Exemplo no PowerShell:

```powershell
$env:RESUME_BASE_URL = 'http://localhost:3001'
$env:RESUME_BROWSER_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
npm run resume:pdf
```

Confira os dois arquivos: texto selecionável, acentos, links e quebras de
página. A opção de imprimir pelo navegador continua disponível no site.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
