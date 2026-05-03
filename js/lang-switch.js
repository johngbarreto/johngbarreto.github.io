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
        'I enjoy coding on my free time (which is rare nowadays)',
      'about.me.paragraph':
        `I started creating apps simply because I enjoyed the aesthetic of it, creating a nice clean screen for other people to use is something that always captivated me. Which is the main reason why I decided to become a mobile developer. Its way more aboout understanding the project and it's usage than anything else, I value a lot in delivering a good experience to the user. \n 
        
        Talking a little bit more about me on a personal level I'm someone that is really chill, but very observative I'd say as well, I really enjoy playing some videos games and coding on my free time, also watch animes and ride my bicicyle!`,
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
        'Swift, UIKit, SwiftUI, Combine, Concurrency, HealthKit, MapKit, WidgetKit, OAuth2 (PKCE), Swift Package Manager (SPM).',
      'arq-patterns': 'Architecture & Patterns',
      'arq-patterns.desc':
        'MVVM, Coordinator, repository pattern, dependency injection, modularization, reusable components, centralized error handling.',
      'net-persistance': 'Networking & Persistence',
      'net-stack.desc':
        'REST APIs, GraphQL, URLSession / Codable, Core Data, Keychain, App Group storage, image caching and loading states.',
      'bootcamp.title': 'Full-Stack Web Development Bootcamp',
      'bootcamp.company': 'Le Wagon · 2019',
      'bootcamp-desc':
        'Le Wagon is a globally recognized coding school that runs intensive, project driven cohorts in many cities; I completed the fulltime web development program. It starts with prepwork (Ruby foundations, Git, and toolchain), then moves quickly through object oriented Ruby, relational databases and SQL, HTML/CSS/JavaScript, and Ruby on Rails—MVC, routing, authentication, and deploying real apps to production.',
      'bootcamp-desc.2':
        'The final stretch is a team capstone: we scoped, built, and demoed a full web product from scratch. That blend of product thinking, RESTstyle APIs, pair work, and code reviews is what made “full stack” tangible—and it set me up to step into larger engineering teams afterward.',
      'projects': 'Projects',
      'projects.github': 'GitHub profile',
      'app.1.stack': 'UIKit, MVVM, OAuth2 (PKCE), Keychain, App Group + WidgetKit',
      'app.1.desc.0':
        'This app is temporarily not publicly accessible because I am preparing it for App Store submission.',
      'app.1.desc.1':
        "AniTimer is an iOS app focused on AnimeSchedule's weekly airing timetable. The home experience is organized by day (Mon-Sun), supports week navigation and practical filters, and now keeps a fixed, cleaner zoom behavior for faster browsing. Search and detail flows connect directly with user tracking.",
      'app.1.desc.2':
        'The app uses a UIKit-first MVVM architecture with centralized networking, OAuth2 (PKCE) authentication, and secure Keychain session storage. Timetable requests include the user\'s timezone so week boundaries and airing times stay correct across regions.',
      'app.1.desc.3':
        'My List favorites also power a Home Screen widget that highlights upcoming episodes. Data is synced through shared App Group storage, with consistent loading/error states and optional local notifications for upcoming air times.',
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
        'Gosto de codar no meu tempo livre (o que é raro hoje em dia)',
      'about.me.paragraph':
        `Comecei a criar aplicativos simplesmente porque gostava da estética; criar uma tela bonita e limpa para outras pessoas usarem é algo que sempre me fascinou. Essa é a principal razão pela qual decidi me tornar um desenvolvedor mobile. É muito mais sobre entender o projeto e seu uso do que qualquer outra coisa, valorizo ​​muito proporcionar uma boa experiência ao usuário. \n 
        
        Falando um pouco mais sobre mim em um nível pessoal, sou uma pessoa bem tranquila, mas também muito observador. Gosto muito de jogar videogames e codar no meu tempo livre, também de assistir a séries, filmes e andar de bike!`,
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
        'Swift, UIKit, SwiftUI, Combine, Concurrency, HealthKit, MapKit, WidgetKit, OAuth2 (PKCE), Swift Package Manager (SPM).',
      'arq-patterns': 'Arquitetura e padrões',
      'arq-patterns.desc':
        'MVVM, Coordinator, repository pattern, injeção de dependência, modularização, componentes reutilizáveis e tratamento centralizado de erros.',
      'net-persistance': 'Networking e persistência',
      'net-stack.desc':
        'REST APIs, GraphQL, URLSession / Codable, Core Data, Keychain, armazenamento via App Group, cache de imagens e estados de loading.',
      'bootcamp.title': 'Bootcamp de desenvolvimento web full stack',
      'bootcamp.company': 'Le Wagon · 2019',
      'bootcamp-desc':
        'A Le Wagon é uma das maiores escolas de programação do mundo, com turmas intensivas e muito hands-on em dezenas de cidades; completei o programa full time de desenvolvimento web. Começa com prepwork online (bases de Ruby, Git e ambiente) e, na imersão, cobre Ruby orientado a objetos, SQL e modelagem relacional, HTML/CSS/JavaScript e Ruby on Rails—MVC, rotas, autenticação e deploy de apps de verdade em produção.',
      'bootcamp-desc.2':
        'O fechamento é um projeto final em equipe: a gente define escopo, implementa e apresenta um produto web do zero ao ar. Ali juntou visão de produto, APIs, trabalho em par e revisão de código—o que tornou “full stack” concreto e me deu base sólida antes de entrar no mercado corporativo.',
      'projects': 'Projetos',
      'projects.github': 'Perfil no GitHub',
      'app.1.stack': 'UIKit, MVVM, OAuth2 (PKCE), Keychain, App Group + WidgetKit',
      'app.1.desc.0':
        'Este app está temporariamente sem acesso público porque estou preparando a versão para publicação na App Store.',
      'app.1.desc.1':
        'AniTimer é um app iOS focado na grade semanal de lançamentos do AnimeSchedule. A experiência da Home é organizada por dia (seg-dom), tem navegação por semana e filtros práticos, e agora mantém um zoom fixo mais limpo para navegação mais rápida. Busca e detalhes se conectam direto ao fluxo de acompanhamento.',
      'app.1.desc.2':
        'Em arquitetura, ele segue UIKit-first com MVVM, rede centralizada, autenticação OAuth2 (PKCE) e sessão segura no Keychain. As consultas da timetable incluem o fuso do usuário para manter horários e fronteiras de semana corretos em diferentes regiões.',
      'app.1.desc.3':
        'Os favoritos da My List também alimentam o widget da Home, destacando os próximos episódios. Os dados são sincronizados por App Group compartilhado, com estados consistentes de loading/erro e notificações locais opcionais para próximos horários de exibição.',
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
