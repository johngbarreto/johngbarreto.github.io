(function () {
  const translations = {
    en: {
      'hero.subtitle': 'iOS Developer',
      'about.me': 'About Me',
      'full.name': 'Full Name:',
      'phone.number': 'Phone Number:',
      'email.label': 'Email:',
      'location': 'Location:',
      'about.lead':
        'Complex systems fail at the edges—I work to find those edges before users do.',
      'about.me.paragraph':
        'I build iOS software for real people: flaky networks, older devices, and the Tuesday when everything goes wrong. That mindset—clarity, testability, and steady refactors—guides how I use SwiftUI, Combine, and concurrency so features stay shippable and maintainable. I keep going deeper into the Apple stack because reliability lives in the details.',
      'exp': 'Experience',
      'title.1': 'Mid-level iOS Developer',
      'company.1': 'MV — 2024 – Present',
      'timeline.body.desc.1':
        'Mid-level iOS developer on a whitelabel healthcare app used by multiple hospitals across Brazil. I own ongoing iOS delivery: new features in SwiftUI, gradual UIKit → SwiftUI migration, Core Data, HealthKit, and releases around appointments, exams, and document management.',
      'timeline.body.desc.2':
        'At Accenture I worked across React, Angular, Liferay, jQuery, and Jenkins. I got strong feedback on adaptability, getting up to speed on unfamiliar codebases, and shipping features that actually helped end users. Joining as mid-level gave me room to own work early—which pushed me to grow fast.',
      'title.2': 'Application Development Analyst',
      'company.2': 'Accenture — 2020 – 2023',
      'skills.section.title': 'Skills & Background',
      'lang-frame': 'Languages & Frameworks',
      'lang-stack.desc':
        'Swift, UIKit, SwiftUI, Combine, Concurrency, HealthKit, MapKit, Swift Package Manager (SPM).',
      'arq-patterns': 'Architecture & Patterns',
      'arq-patterns.desc':
        'MVVM, VIPER, Coordinator, Repository pattern, dependency injection, modularization, reusable components.',
      'net-persistance': 'Networking & Persistence',
      'net-stack.desc':
        'Firebase, REST APIs, GraphQL, Core Data, URLSession / Codable.',
      'bootcamp.title': 'Full-Stack Web Development Bootcamp',
      'bootcamp.company': 'Le Wagon · 2019',
      'bootcamp-desc':
        'Le Wagon is a globally recognized coding school that runs intensive, project-driven cohorts in many cities; I completed the full-time web development program. It starts with prepwork (Ruby foundations, Git, and toolchain), then moves quickly through object-oriented Ruby, relational databases and SQL, HTML/CSS/JavaScript, and Ruby on Rails—MVC, routing, authentication, and deploying real apps to production.',
      'bootcamp-desc.2':
        'The final stretch is a team capstone: we scoped, built, and demoed a full web product from scratch. That blend of product thinking, REST-style APIs, pair work, and code reviews is what made “full stack” tangible—and it set me up to step into larger engineering teams afterward.',
      'projects': 'Projects',
      'projects.github': 'GitHub profile',
      'app.1.stack': 'UIKit, MVVM, Anime Schedule API, Firebase, WidgetKit',
      'app.1.desc':
        'AniTimer is an iOS app built around the weekly release schedule: columns per weekday (Mon–Sun), a full-week view with pinch-to-zoom, details like next episodes, genres, status, related titles, and favorites that power a home screen widget—100% programmatic UIKit.',
      'app.1.desc.2':
        'The Anime Schedule API (v3) provides the grid and metadata, sending the device timezone so dates and times stay relevant. An App Group–backed store syncs data into WidgetKit without running Firebase in the extension. OAuth (PKCE) connects your Anime Schedule account.',
      'app.1.desc.3':
        'MVVM across features, image caching, skeletons and loading, centralized error handling, and a widget target—full flow of API, persistence, App Group, and WidgetKit in one project.',
      'app.2.stack': 'SwiftUI, GraphQL, Apollo, Combine',
      'app.2.desc':
        'Explores GraphQL, Combine, and Swift concurrency against the Rick and Morty API.',
      'app.2.desc.2':
        'A playground for reactive patterns, parallelism, and reusable SwiftUI components with MVVM.',
      'footer.copyright':
        '© 2025 João Gabriel Barreto · Static site, GitHub Pages',
      'lang.toggle.aria': 'Toggle language between Portuguese and English',
    },
    pt: {
      'hero.subtitle': 'Desenvolvedor iOS',
      'nav.contact': 'Contato',
      'about.me': 'Sobre mim',
      'full.name': 'Nome completo:',
      'phone.number': 'Celular:',
      'email.label': 'E-mail:',
      'location': 'Localização:',
      'about.lead':
        'Sistemas complexos falham nas bordas—trabalho para encontrar essas bordas antes dos usuários.',
      'about.me.paragraph':
        'Desenvolvo apps iOS para pessoas reais: rede oscilando, aparelhos antigos e a terça-feira em que tudo resolve falhar ao mesmo tempo. Essa postura—clareza, testabilidade e refactors constantes—orienta como uso SwiftUI, Combine e concorrência para entregar features que continuam sustentáveis. Sigo mergulhando no ecossistema Apple porque confiabilidade mora nos detalhes.',
      'exp': 'Experiência',
      'title.1': 'Desenvolvedor iOS Pleno',
      'company.1': 'MV — 2024 – Presente',
      'timeline.body.desc.1':
        'Desenvolvedor iOS pleno em um app de saúde whitelabel usado por diversos hospitais no Brasil. Sou responsável pela entrega contínua no iOS: novas features em SwiftUI, migração gradual de UIKit para SwiftUI, Core Data, HealthKit e releases voltados a agendamentos, exames e gestão de documentos.',
      'timeline.body.desc.2':
        'Na Accenture atuei com React, Angular, Liferay, jQuery e Jenkins. Recebi feedback forte sobre adaptabilidade, leitura rápida de bases desconhecidas e entrega de features que de fato ajudavam o usuário final. Entrar já como pleno me deu autonomia cedo—o que me puxou a crescer rápido.',
      'title.2': 'Analista de Desenvolvimento de Aplicações',
      'company.2': 'Accenture — 2020 – 2023',
      'skills.section.title': 'Skills e formação',
      'lang-frame': 'Linguagens e frameworks',
      'lang-stack.desc':
        'Swift, UIKit, SwiftUI, Combine, Concurrency, HealthKit, MapKit, Swift Package Manager (SPM).',
      'arq-patterns': 'Arquitetura e padrões',
      'arq-patterns.desc':
        'MVVM, VIPER, Coordinator, repository pattern, injeção de dependência, modularização e componentes reutilizáveis.',
      'net-persistance': 'Networking e persistência',
      'net-stack.desc':
        'Firebase, REST APIs, GraphQL, Core Data, URLSession / Codable.',
      'bootcamp.title': 'Bootcamp de desenvolvimento web full stack',
      'bootcamp.company': 'Le Wagon · 2019',
      'bootcamp-desc':
        'A Le Wagon é uma das maiores escolas de programação do mundo, com turmas intensivas e muito hands-on em dezenas de cidades; completei o programa full time de desenvolvimento web. Começa com prepwork online (bases de Ruby, Git e ambiente) e, na imersão, cobre Ruby orientado a objetos, SQL e modelagem relacional, HTML/CSS/JavaScript e Ruby on Rails—MVC, rotas, autenticação e deploy de apps de verdade em produção.',
      'bootcamp-desc.2':
        'O fechamento é um projeto final em equipe: a gente define escopo, implementa e apresenta um produto web do zero ao ar. Ali juntou visão de produto, APIs, trabalho em par e revisão de código—o que tornou “full stack” concreto e me deu base sólida antes de entrar no mercado corporativo.',
      'projects': 'Projetos',
      'projects.github': 'Perfil no GitHub',
      'app.1.stack': 'UIKit, MVVM, API Anime Schedule, Firebase, WidgetKit',
      'app.1.desc':
        'AniTimer é um app iOS focado na grade semanal de estreias: colunas por dia (seg–dom), visão da semana inteira com pinch-to-zoom, informações como próximos episódios, gêneros, status, relacionados e favoritos que alimentam um widget na tela inicial—UIKit 100% programático.',
      'app.1.desc.2':
        'A API Anime Schedule (v3) fornece a grade e os metadados, enviando o fuso do aparelho para mostrar data e horário relevante. Um armazenamento via App Group sincroniza os dados para o WidgetKit sem rodar Firebase na extensão. OAuth (PKCE) integra a conta AnimeSchedule.',
      'app.1.desc.3':
        'MVVM nas features, cache de imagens, skeletons e loading, tratamento de erros centralizado e target de widget—fluxo completo de API, persistência, App Group e WidgetKit no mesmo projeto.',
      'app.2.stack': 'SwiftUI, GraphQL, Apollo, Combine',
      'app.2.desc':
        'Uso da API de Rick and Morty para explorar GraphQL, Combine e Swift Concurrency.',
      'app.2.desc.2':
        'Laboratório de reatividade, paralelismo e componentes SwiftUI reutilizáveis com MVVM.',
      'footer.copyright':
        '© 2025 João Gabriel Barreto · Site estático, GitHub Pages',
      'lang.toggle.aria': 'Alternar idioma entre português e inglês',
    },
  };

  function applyLang(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title =
      lang === 'en'
        ? 'João Gabriel Barreto — iOS Developer'
        : 'João Gabriel Barreto — Desenvolvedor iOS';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val =
        (translations[lang] && translations[lang][key]) ||
        el.dataset.i18nFallback ||
        el.textContent;
      el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = translations[lang] && translations[lang][key];
      if (val) el.setAttribute('aria-label', val);
    });
    localStorage.setItem('siteLang', lang);
  }

  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  const saved = localStorage.getItem('siteLang') || 'en';
  toggle.checked = saved === 'en';
  applyLang(saved);

  toggle.addEventListener('change', () => {
    applyLang(toggle.checked ? 'en' : 'pt');
  });
})();
