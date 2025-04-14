type GenericSection = {
  [key: string]: string
}

type LanguageStructure = {
  sidebar: GenericSection
  home: GenericSection
  about: GenericSection
  projects: GenericSection
  skills: GenericSection
}

type LanguagesType = {
  [key: string]: LanguageStructure
}

const Languages: LanguagesType = {
  'pt-BR': {
    sidebar: {
      home: 'Início',
      about: 'Sobre mim',
      projects: 'Projetos',
      skills: 'Habilidades',
    },
    home: {
      title1: 'OLÁ,',
      title2: 'EU SOU',
      subtitle1:
        'Especializado em desenvolvimento de aplicações web, com ênfase em Next.js, priorizando performance, escalabilidade e um UX otimizado e agradável.',
      subtitle2: 'Desenvolvedor Full Stack',
      button: 'Vamos trabalhar juntos?',
    },
    about: {
      heading: 'Minha história',
      subtitle: 'Este sou eu!',
      description1:
        'Sou Desenvolvedor Full Stack com 7 anos de experiência, especializado em criar aplicações modernas com Next.js, ReactJS, Tailwind CSS e Node.js. Atualmente, foco no desenvolvimento de aplicativos para plataformas de e-commerce, landing pages com SEO otimizado e microserviços, entregando soluções escaláveis e voltadas para resultados.',
      year98: 'Nasci em 06 de fevereiro.',
      year04_1: 'Meu primeiro contato com tecnologia.',
      year04_2:
        'Meu pai comprou nosso primeiro computador, e eu não perdi tempo: comecei a explorar tudo o que essa nova ferramenta tinha a oferecer.',
      year16_1: 'Concluí o ensino médio e o curso técnico em informática.',
      year16_2:
        'Foi nesse período que me aprofundei no estudo de desenvolvimento web e comecei a trabalhar em projetos freelance.',
      year16_3:
        'Meu primeiro projeto foi um sistema de gerenciamento de reservas para um consultório, desenvolvido com HTML, CSS, PHP e MySQL.',
      year18_1:
        'Inicio minha trajetória em uma empresa como desenvolvedor full stack.',
      year18_2:
        'Embora já fosse profissional como freelancer, este foi o momento em que passei a atuar em um ambiente corporativo, ampliando minha experiência e habilidades.',
      year22_1:
        'Agora, com 7 anos de experiência no mercado, uma visão mais ampla e diversos desafios superados,sigo focado em criar soluções escaláveis, explorando novas tecnologias e buscando projetos que desafiem e ampliem minhas habilidades.',
    },
    projects: {
      heading: 'Projetos',
      subtitle: 'Um pouco do meu trabalho.',
    },
    skills: {
      subtitle: 'As ferramentas que eu domino.',
    },
  },
  en: {
    sidebar: {
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      skills: 'Skills',
    },
    home: {
      title1: 'HI,',
      title2: 'I AM',
      subtitle1:
        'Specialized in web application development, with a focus on Next.js, prioritizing performance, scalability, and an optimized, enjoyable UX.',
      subtitle2: 'Full Stack Developer',
      button: "Let's work together?",
    },
    about: {
      heading: 'About me',
      subtitle: 'This is me!',
      description1:
        'I am a Full Stack Developer with 7 years of experience, specialized in building modern applications with Next.js, ReactJS, Tailwind CSS, and Node.js. Currently, I focus on developing apps for e-commerce platforms, SEO-optimized landing pages, and microservices, delivering scalable and results-driven solutions.',
      year98: 'I was born on February 6th.',
      year04_1: 'My first contact with technology.',
      year04_2:
        "My father bought our first computer, and I didn't waste any time—I started exploring everything this new tool had to offer.",
      year16_1:
        'I graduated from high school and completed a technical course in IT.',
      year16_2:
        'During this period, I delved deeper into studying web development and worked on some freelance projects.',
      year16_3:
        'My first project was a reservation management system for a clinic, developed using HTML, CSS, PHP, and MySQL.',
      year18_1: 'I began my journey in a company as a full stack developer',
      year18_2:
        'Although I was already a professional freelancer, this marked the start of my experience working in a corporate environment, further enhancing my skills and expertise.',
      year22_1:
        'Now, with 7 years of experience, a broader perspective, and many challenges overcome, I remain focused on creating scalable solutions, exploring new technologies, and seeking projects that challenge and expand my skills.',
    },
    projects: {
      heading: 'Projects',
      subtitle: 'A little bit of my job.',
    },
    skills: {
      subtitle: 'The tools i master.',
    },
  },
}

export default Languages
