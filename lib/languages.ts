type GenericSection = {
  [key: string]: string
}

type LanguageStructure = {
  topbar: GenericSection
  index: GenericSection
  about: GenericSection
  projects: GenericSection
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
        'Sou desenvolvedor full stack há 7 anos e apaixonado por tecnologia desde criança. Atualmente, trabalho na Performa.AI, onde comecei como front-end e evoluí para full stack, liderando projetos completos: do design de interfaces à arquitetura de bancos de dados, implementação de regras de negócio e deploy.',
      text2:
        'Tenho experiência sólida com React, Next.js, Node.js, Nest.js, PHP, Laravel, PostgreSQL, MongoDB, JavaScript (ES5, ES6) e TypeScript.',
      text3:
        'Além do trabalho em tempo integral, atuo como freelancer, o que me permite encarar diferentes desafios e ampliar meu repertório técnico. Sou formado como técnico em informática e tenho grande interesse por inovação, UX e resolução de problemas.',
      text4:
        'Se você procura um profissional dedicado, curioso e comprometido com resultados de qualidade, estou pronto para contribuir com o seu projeto. Vamos conversar?',
    },
    projects: {
      text1:
        'Explore alguns dos projetos que desenvolvi ao longo da minha carreira. Clique em qualquer projeto para ver mais detalhes, tecnologias utilizadas e meu papel em cada um deles.',
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
        'I am a full stack developer with 7 years of experience and a passion for technology that started early. I currently work at Performa.AI, where I began as a front-end developer and grew into a full stack role, leading projects from start to finish: designing interfaces, architecting databases, implementing business logic, and handling deployment.',
      text2:
        'I have solid experience with React, Next.js, Node.js, Nest.js, PHP, Laravel, PostgreSQL, MongoDB, JavaScript (ES5, ES6), and TypeScript. I’m always looking to explore new technologies and best practices to deliver modern, efficient, and scalable solutions.',
      text3:
        'In addition to my full-time job, I also take on freelance projects, which allows me to face different challenges and expand my technical skills. I have a technical degree in IT and a strong interest in innovation, UX, and problem-solving.',
      text4:
        'If you’re looking for a dedicated, curious professional committed to delivering quality results, I’m ready to contribute to your project. Let’s talk?',
    },
    projects: {
      text1:
        'Explore some of the projects I’ve developed throughout my career. Click on any project to see more details, the technologies used, and my role in each one.',
    },
    skills: {
      subtitle: 'The tools i master.',
    },
  },
}

export default Languages
