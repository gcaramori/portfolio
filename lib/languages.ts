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
        'Sou um desenvolvedor full stack de 27 anos, moro em Nova Odessa - São Paulo, com 7 anos de experiência profissional construindo aplicações robustas, escaláveis e com interfaces amigáveis para os usuários. Minha jornada na tecnologia começou cedo: meu pai comprou nosso primeiro computador quando eu tinha apenas 3 anos, e desde então sou fascinado por tecnologia, computadores e games.',
      text2:
        'Atualmente, trabalho em tempo integral na Performa.AI, onde comecei como desenvolvedor front-end e evoluí para o full stack. Ao longo dos anos, tive a oportunidade de liderar projetos do início ao fim — desenhando interfaces, arquitetando bancos de dados, implementando regras de negócio e cuidando do deploy. Também gosto de pegar projetos como freelancer, o que me permite encarar novos desafios e continuar aprendendo.',
      text3:
        'Meu stack principal inclui React, Next.js, Node.js, Nest.js, PHP, Laravel, PostgreSQL, MongoDB, JavaScript (ES5, ES6) e TypeScript. Estou sempre disposto a explorar novas tecnologias e melhores práticas, pois acredito que o aprendizado contínuo é essencial para entregar ótimas soluções.',
      text4:
        'Me formei como técnico em informática em 2015 e, desde então, minha paixão por programação e resolução de problemas só aumentou. Quando não estou codando, provavelmente estou lendo mangá ou explorando as últimas tendências em tecnologia.',
      text5:
        'Se você procura alguém dedicado, curioso e realmente apaixonado por tecnologia, vamos conversar!',
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
        'I’m a 27-year-old full stack developer, based in Nova Odessa - Brasil, with 7 years of professional experience building robust, scalable, and user-friendly applications. My journey in tech started early: my father bought our first computer when I was just 3 years old, and I’ve been fascinated by technology, computers, and gaming ever since.',
      text2:
        'I currently work full-time at Performa.AI, where I began as a front-end developer and grew into a full stack role. Over the years, I’ve had the opportunity to lead projects from start to finish—designing interfaces, architecting databases, implementing business logic, and handling deployment.',
      text3:
        'My main tech stack includes React, Next.js, Node.js, Nest.js, PHP, Laravel, PostgreSQL, MongoDB, JavaScript (ES5, ES6), and TypeScript. I’m always eager to dive into new technologies and best practices, and I believe that continuous learning is key to delivering great solutions.',
      text4:
        'I graduated as an IT technician in 2015, and since then, my passion for coding and problem-solving has only grown. When I’m not coding, you’ll probably find me reading manga or exploring the latest trends in tech.',
      text5:
        'If you’re looking for someone who’s dedicated, curious, and genuinely passionate about technology, let’s connect!',
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
