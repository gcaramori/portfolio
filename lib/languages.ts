type GenericSection = {
  [key: string]: string
}

type LanguageStructure = {
  topbar: GenericSection
  index: GenericSection
  about: GenericSection
  projects: GenericSection
  jsbjjkylemore: GenericSection
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
        'Explore alguns dos projetos que desenvolvi ao longo da minha carreira. Clique em qualquer projeto para ver mais detalhes, tecnologias utilizadas e meu papel em cada um deles.',
    },
    jsbjjkylemore: {
      text1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies orci quis vestibulum scelerisque. Cras et finibus nunc. Etiam tincidunt lacinia erat. Maecenas nulla neque, dapibus eu vehicula sit amet, pulvinar nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra ex sapien, vitae efficitur lacus interdum nec. Quisque vitae urna tortor. Integer ullamcorper justo ut sapien scelerisque luctus et sed sem. Morbi nunc felis, consequat non molestie in, tempor et risus. Aliquam tempus augue imperdiet elit sodales iaculis. Nunc ex mi, venenatis eget lectus et, hendrerit lacinia metus.',
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
        'Explore some of the projects I’ve developed throughout my career. Click on any project to see more details, the technologies used, and my role in each one.',
    },
    jsbjjkylemore: {
      text1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies orci quis vestibulum scelerisque. Cras et finibus nunc. Etiam tincidunt lacinia erat. Maecenas nulla neque, dapibus eu vehicula sit amet, pulvinar nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra ex sapien, vitae efficitur lacus interdum nec. Quisque vitae urna tortor. Integer ullamcorper justo ut sapien scelerisque luctus et sed sem. Morbi nunc felis, consequat non molestie in, tempor et risus. Aliquam tempus augue imperdiet elit sodales iaculis. Nunc ex mi, venenatis eget lectus et, hendrerit lacinia metus.',
    },
    skills: {
      subtitle: 'The tools i master.',
    },
  },
}

export default Languages
