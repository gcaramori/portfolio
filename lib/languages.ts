type GenericSection = {
  [key: string]: string
}

type LanguageStructure = {
  topbar: GenericSection
  index: GenericSection
  about: GenericSection
  projects: GenericSection
  jsbjjkylemore?: GenericSection
  criptobeer?: GenericSection
  unit5?: GenericSection
  performapanel?: GenericSection
  skills: GenericSection
}

type LanguagesType = {
  [key: string]: LanguageStructure
}

const Languages: LanguagesType = {
  'pt-BR': {
    topbar: {
      index: 'Início',
      about: 'Sobre mim',
      projects: 'Projetos',
      skills: 'Habilidades',
    },
    index: {
      title1: 'OLÁ,',
      title2: 'EU SOU',
      subtitle1:
        'Especialista em criar aplicações web modernas com Next.js, focadas em performance excepcional, escalabilidade robusta e experiências de usuário intuitivas e envolventes.',
      subtitle2: 'Desenvolvedor Full Stack',
      button: 'Vamos trabalhar juntos?',
    },
    about: {
      text1:
        'Sou desenvolvedor full stack com 7 anos de experiência, especializado em criar aplicações web robustas. Minha trajetória na Performa.AI me permitiu liderar projetos de ponta a ponta, atuando desde o design de interfaces até a arquitetura de bancos de dados, implementação de regras de negócio e deploy em produção',
      text2:
        'Tenho experiência sólida com React, Next.js, Node.js, Nest.js, PHP, Laravel, PostgreSQL, MongoDB, JavaScript (ES5, ES6) e TypeScript.',
      text3:
        'Entre os projetos que desenvolvi como freelancer, destaco o website de uma academia de jiu-jitsu, que conta com funcionalidades completas de cadastro, login, pagamento e gerenciamento de assinaturas de alunos utilizando a API da GoCardless.',
      text4:
        'Se você procura um profissional dedicado, curioso e comprometido com resultados de qualidade, estou pronto para contribuir com o seu projeto.',
      cta: 'Vamos conversar?',
    },
    projects: {
      text1:
        'Explore alguns dos projetos que desenvolvi ao longo da minha carreira. Clique em qualquer projeto para ver mais detalhes.',
    },
    jsbjjkylemore: {
      title1: 'Detalhes',
      text1:
        'Criei todo o design original e desenvolvi o site completo com atenção total aos detalhes visuais (pixel perfect). Implementei páginas totalmente responsivas, com integrações às APIs do Google (Maps e Calendário), além de um sistema automatizado de pagamentos recorrentes via GoCardless. O projeto foi pensado para otimizar o fluxo operacional da academia e simplificar o processo de inscrição de novos alunos, reduzindo tarefas manuais e aumentando a eficiência.',
      title2: 'Tecnologias',
      text2:
        'Next.js, TypeScript, Tailwind, PostgreSQL, Prisma ORM, Framer-Motion, API Google e API GoCardless.',
    },
    criptobeer: {
      title1: 'Detalhes',
      text1:
        'Fui responsável por todo o processo — desde o design no Figma até a implementação final, garantindo fidelidade total ao layout (pixel perfect) com abordagem figma-to-code. Destaque para a animação interativa no estilo Matrix, onde hashs de Bitcoin caem dinamicamente ao fundo. Ao interagir com o cursor, cada hash revela informações sobre seu significado, proporcionando uma experiência imersiva e educativa.',
      title2: 'Tecnologias',
      text2: 'React, Tailwind, Framer-Motion',
    },
    skills: {
      subtitle: 'As ferramentas que eu domino.',
    },
  },
  en: {
    topbar: {
      index: 'Index',
      about: 'About me',
      projects: 'Projects',
      skills: 'Skills',
    },
    index: {
      title1: 'HI,',
      title2: 'I AM',
      subtitle1:
        'Expert in building modern web applications with Next.js, focused on exceptional performance, robust scalability, and intuitive, engaging user experiences.',
      subtitle2: 'Full Stack Developer',
      button: "Let's work together?",
    },
    about: {
      text1:
        'I am a full stack developer with 7 years of experience, specialized in creating robust web applications. My journey at Performa.AI has allowed me to lead end-to-end projects, working on everything from interface design to database architecture, business rule implementation, and production deployment.',
      text2:
        'I have solid experience with React, Next.js, Node.js, Nest.js, PHP, Laravel, PostgreSQL, MongoDB, JavaScript (ES5, ES6), and TypeScript.',
      text3:
        'Among the projects I developed as a freelancer, I highlight a website for a jiu-jitsu academy, which includes full features for registration, login, payment, and student subscription management using the GoCardless API.',
      text4:
        'If you are looking for a dedicated, curious, and committed professional delivering quality results, I am ready to contribute to your project.',
      cta: 'Shall we talk?',
    },
    projects: {
      text1:
        'Explore some of the projects I’ve developed throughout my career. Click on any project to see more details.',
    },
    jsbjjkylemore: {
      title1: 'Details',
      text1:
        'I created the original design and implemented the entire site with pixel perfect attention to visual details. The website features fully responsive pages, integrations with Google APIs (Maps and Calendar), and an automated recurring payment system using GoCardless. The project was designed to streamline the gym’s operational workflow and simplify the enrollment process for new students, reducing manual steps and increasing overall efficiency.',
      title2: 'Tecnologias',
      text2:
        'Next.js, TypeScript, Tailwind, PostgreSQL, Prisma ORM, Framer-Motion, API Google e API GoCardless.',
    },
    criptobeer: {
      title1: 'Details',
      text1:
        'I was responsible for the entire process — from the design in Figma to the final implementation — ensuring full layout accuracy (pixel perfect) using a figma-to-code approach. A standout feature is the interactive Matrix-style animation, where Bitcoin hashes continuously fall in the background. When hovered, each hash reveals meaningful information, offering users an immersive and informative experience.',
      title2: 'Tecnologias',
      text2: 'React, Tailwind, Framer-Motion',
    },
    skills: {
      subtitle: 'The tools i master.',
    },
  },
}

export default Languages
