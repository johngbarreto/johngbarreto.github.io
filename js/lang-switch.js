// ...existing code...
(function() {
  const translations = {
    en: {
        "hero.subtitle": "iOS Developer",
        "about.me": "About Me",
        "full.name": "Full Name:",
        "phone.number": "Phone Number:",
        "location": "Location:",
        "about.me.paragraph": "I enjoy creating solutions and solving problems, which is why I'm here 😆. I've been exploring Combine and Swift Concurrency to make my apps more reactive, and I'm always learning new ways to build better products within the Apple ecosystem.",
        "exp": "Experience",
        "title.1": "Mid-level iOS Developer",
        "company.1": "MV - 2024 - Present",
        "timeline.body.desc.1": "At MV, I am responsible for nearly the entire development cycle of the health app in the innovation sector. From new features to publishing on the App Store. The project uses UIKit (in legacy parts) and SwiftUI (for new screens and components), as well as Core Data, HealthKit, and MapKit. I have created custom and reusable components to adapt the app to new versions of iOS 26. I work in partnership with a senior consulting developer who reviews the code and supports more complex technical decisions.",
        "timeline.body.desc.2": "During my time at the company, I worked with various technologies such as React, Angular, Liferay, jQuery, Jenkins. I received positive feedback regarding my adaptability, easy understanding of projects, and how to effectively add features for the user. Even though it was my entry into the technology field as a mid-level developer, it was great to have the responsibility and autonomy to showcase my potential.",
        "lang-frame": "Languages and Frameworks",
        "arq-patterns": "Architecture and Patterns",
        "arq-patterns.desc": "MVVM, VIPER, Coordinator, Repository Pattern, Dependency Injection, Modularization, and reusable components",
        "net-persistance": "Networking and Persistence",
        "bootcamp-desc": " This course was the beginning of my journey where I learned the full scope of creating web applications, from front to back end. Full stack development course using Ruby on Rails.",
        "projects": "Projects",
        "app.1.desc": "An app developed with the goal of improving my skills in creating reusable components and ViewCode.",
        "app.1.desc.2": "The search and display of animes use the MyAnimeList API, while favorite management is done with Firebase.",
        "app.1.desc.3": "Programmatic views with MVVM.",
        "app.2.desc": "App developed using the Rick and Morty API to explore new technologies such as GraphQL, Combine, and Swift Concurrency.",
        "app.2.desc.2": "The project was an opportunity to apply advanced concepts of reactivity and parallelism, as well as create reusable components in SwiftUI with MVVM architecture.",
      // add keys and translations here...
    },
    pt: {
        "hero.subtitle": "Desenvolvedor iOS",
        "nav.contact": "Contato",
        "about.me": "Sobre Mim",
        "full.name": "Nome Completo:",
        "phone.number": "Celular:",
        "location": "Localização:",
        "about.me.paragraph": "Gosto de criar soluções e resolver problemas, por isso estou aqui 😆. Tenho explorado Combine e Swift Concurrency para tornar meus apps mais reativos, sigo sempre aprendendo novas formas de construir produtos melhores dentro do ecossistema Apple",
        "exp": "Experiência",
        "title.1": "Desenvolvedor iOS Pleno",
        "company.1": "MV - 2024 - Presente",
        "timeline.body.desc.1": "Na MV, sou responsável por praticamente todo o ciclo de desenvolvimento do app de saúde do setor de inovação. Desde novas features até a publicação na App Store. O projeto usa UIKit (em partes legadas) e SwiftUI (para novas telas e componentes), além de usar Core Data, HealthKit e MapKit. Tenho criado componentes customizados e reutilizáveis para adaptar o app a novas versões do iOS 26. Trabalho em parceria com um desenvolvedor sênior consultor, que revisa o código e apoia em decisões técnicas mais complexas.",
        "timeline.body.desc.2": "Durante meu tempo na empresa trabalhei com diversas tecnologias como React, Angular, Liferay, jQuery, Jenkins. Recebi feedbacks positivos com relação à minha adaptabilidade, fácil entendimento de projetos e como adicionar features de forma eficaz para o usuário. Mesmo sendo minha entrada na área de tecnologia já como pleno, foi muito bom ter a responsabilidade e autonomia para mostrar meu potencial.",
        "lang-frame": "Linguagens e Frameworks",
        "arq-patterns": "Arquitetura e Padrões",
        "arq-patterns.desc": "MVVM, VIPER, Coordinator, Repository Pattern, Dependency Injection, Modularização e componentes reutilizáveis",
        "net-persistance": "Networking e Persistência",
        "bootcamp-desc": " Esse curso foi o começo da minha jornada onde aprendi o escopo completo da criação de aplicativos web, do front ao backend. Curso de desenvolvimento full stack utilizando Ruby on Rails.",
        "projects": "Projetos",
        "app.1.desc": "Um app desenvolvido com objetivo de aprimorar minhas habilidades em criar 	componentes reutilizaveis e ViewCode.",
        "app.1.desc.2": "A busca e exibição dos animes utilizam a API do MyAnimeList, enquanto o gerenciamento de favoritos é feito com Firebase.",
        "app.1.desc.3": "Views programáticas com MVVM .",
        "app.2.desc": "App desenvolvido utilizando a API do Rick and Morty para explorar novas tecnologias como GraphQL, Combine e Swift Concurrency. ",
        "app.2.desc.2": "O projeto foi uma oportunidade de aplicar conceitos avançados de reatividade e paralelismo, além de criar componentes reutilizáveis em SwiftUI com arquitetura MVVM. ",
      // add keys and translations here...
    }
  };

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = (translations[lang] && translations[lang][key]) || el.dataset_i18n_fallback || el.textContent;
      el.textContent = val;
    });
    localStorage.setItem('siteLang', lang);
  }

  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  // init from saved or default
  const saved = localStorage.getItem('siteLang') || (document.documentElement.lang || 'pt');
  toggle.checked = saved === 'en';
  applyLang(saved);

  toggle.addEventListener('change', () => {
    applyLang(toggle.checked ? 'en' : 'pt');
  });
})();