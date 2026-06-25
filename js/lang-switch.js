(function () {
  const translations = {
    en: {
      'hero.subtitle': 'iOS Software Engineer',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.projects': 'Projects',
      'about.me': 'About Me',
      'full.name': 'Full Name:',
      'phone.number': 'Phone Number:',
      'email.label': 'Email:',
      'location': 'Location:',
      'about.me.paragraph':
        'iOS Software Engineer with 4 years of experience owning high-impact features throughout the development lifecycle. I contribute to modular architectures, reusable UI systems, offline-aware experiences, and performance-focused mobile development within white-label applications used by thousands of users.',
      'exp': 'Experience',
      'title.1': 'iOS Software Engineer',
      'company.1': 'MV — 2024 – Present',
      'timeline.body.desc.1':
        'Led Core Data persistence and synchronization improvements using Crashlytics monitoring, improving app reliability by 20% across multiple white-label hospital releases. Built a modular attendance and exam history feature in SwiftUI, reducing network usage by 30% and increasing offline availability on high-traffic screens.',
      'timeline.body.desc.1b':
        'Delivered in-app document preview for PDFs and images, implemented silent push background refresh for account updates, and developed tier-aware feature availability aligned with business logic. Built invoice and income tax screens as isolated SPM modules with reusable UI and shared design system patterns. Experience with App Store Connect, certificates, and App Store submissions.',
      'title.2': 'Software Engineer',
      'company.2': 'Accenture — 2020 – 2023',
      'timeline.body.desc.2':
        'Contributed to large-scale web and iOS applications for major Brazilian clients including Claro and DTVGO, supporting feature development, maintenance, and UX improvements across fast-paced consulting engagements.',
      'timeline.body.desc.2b':
        'Supported high-traffic digital platform initiatives during major live events, including streaming-related experiences during the World Cup period. Recognized for strong autonomy, fast onboarding into unfamiliar systems, and consistent delivery in agile, cross-functional teams.',
      'skills.section.title': 'Skills',
      'education.section.title': 'Education',
      'lang-frame': 'Languages & Frameworks',
      'lang-stack.desc': 'Swift, Objective-C, SwiftUI, UIKit.',
      'arq-patterns': 'Architecture & Patterns',
      'arq-patterns.desc':
        'MVVM, MVVM-C, VIPER, Clean Architecture, modular architecture, design systems.',
      'net-apis': 'Networking & APIs',
      'net-apis.desc': 'REST APIs, GraphQL, Alamofire.',
      'persistence': 'Persistence & Storage',
      'persistence.desc': 'Core Data, SwiftData, Keychain, UserDefaults.',
      'concurrency': 'Concurrency & Reactive',
      'concurrency.desc': 'Combine, Swift Concurrency, background tasks.',
      'testing': 'Testing & Quality',
      'testing.desc': 'XCTest, unit testing, Firebase Crashlytics.',
      'tools': 'Tools & CI/CD',
      'tools.desc': 'Git, SPM, CocoaPods, Fastlane, CI/CD.',
      'ai-tools': 'AI-Assisted Development',
      'ai-tools.desc':
        'Cursor and Claude Code for debugging workflows, crash analysis, feature planning, and day-to-day productivity.',
      'bootcamp.title': 'Web Development Bootcamp',
      'bootcamp.company': 'Le Wagon · 2019',
      'bootcamp-desc':
        'Completed Le Wagon’s intensive full-time bootcamp focused on full-stack application development: Ruby, Ruby on Rails, SQL, JavaScript, REST APIs, Git, and modern web architecture.',
      'bootcamp-desc.2':
        'Built and deployed collaborative, production-style projects in team-based environments.',
      'projects': 'Projects',
      'projects.github': 'GitHub profile',
      'app.1.desc.0':
        'Personal iOS project focused on anime release tracking — currently preparing for App Store submission.',
      'app.1.desc.1':
        'AniTimer uses the MyAnimeSchedule API to deliver filtering, favorites management, and personalized weekly release schedules so users can browse upcoming anime in a timetable view.',
      'app.1.desc.2':
        'Implemented local and configurable notification flows aligned with upcoming air dates. Exploring MVVM-C, reusable UI components, and SwiftUI integration within UIKit-based flows.',
      'app.1.desc.3':
        'WidgetKit integrations and modern iOS capabilities, using the project as a platform for modular architecture and SwiftUI alongside UIKit.',
      'app.2.stack': 'SwiftUI, GraphQL, Apollo, Combine',
      'app.2.desc':
        'Explores GraphQL, Combine, and Swift concurrency against the Rick and Morty API.',
      'app.2.desc.2':
        'A playground for reactive patterns, parallelism, and reusable SwiftUI components with MVVM.',
      'footer.copyright':
        '© 2026 João Gabriel Barreto · Static site, GitHub Pages',
      'lang.toggle.aria': 'Toggle language between Portuguese and English',
    },
    pt: {
      'hero.subtitle': 'Engenheiro de Software iOS',
      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.education': 'Formação',
      'nav.projects': 'Projetos',
      'about.me': 'Sobre mim',
      'full.name': 'Nome completo:',
      'phone.number': 'Celular:',
      'email.label': 'E-mail:',
      'location': 'Localização:',
      'about.me.paragraph':
        'Engenheiro de Software iOS com 4 anos de experiência liderando features de alto impacto em todo o ciclo de desenvolvimento. Atuo em arquiteturas modulares, sistemas de UI reutilizáveis, experiências offline-first e performance em apps whitelabel usados por milhares de usuários.',
      'exp': 'Experiência',
      'title.1': 'Engenheiro de Software iOS',
      'company.1': 'MV — 2024 – Presente',
      'timeline.body.desc.1':
        'Liderei melhorias de persistência e sincronização com Core Data e monitoramento via Crashlytics, aumentando a confiabilidade do app em 20% em releases whitelabel para hospitais. Desenvolvi módulo de presença e histórico de exames em SwiftUI, reduzindo uso de rede em 30% e melhorando disponibilidade offline em telas de alto tráfego.',
      'timeline.body.desc.1b':
        'Entreguei preview in-app de PDFs e imagens, refresh silencioso via push para atualizações de conta e regras de features por tier alinhadas à lógica de negócio. Construí telas de fatura e imposto de renda como SPMs isolados com UI reutilizável e design system compartilhado. Experiência com App Store Connect, certificados e submissões à App Store.',
      'title.2': 'Engenheiro de Software',
      'company.2': 'Accenture — 2020 – 2023',
      'timeline.body.desc.2':
        'Atuei em aplicações web e iOS de grande escala para clientes como Claro e DTVGO, com desenvolvimento de features, manutenção e melhorias de UX em ambientes de consultoria dinâmicos.',
      'timeline.body.desc.2b':
        'Suporte a plataformas digitais de alto tráfego em eventos ao vivo, incluindo experiências de streaming na Copa do Mundo. Reconhecido por autonomia, onboarding rápido em sistemas desconhecidos e entrega consistente em times ágeis e multidisciplinares.',
      'skills.section.title': 'Skills',
      'education.section.title': 'Formação',
      'lang-frame': 'Linguagens e frameworks',
      'lang-stack.desc': 'Swift, Objective-C, SwiftUI, UIKit.',
      'arq-patterns': 'Arquitetura e padrões',
      'arq-patterns.desc':
        'MVVM, MVVM-C, VIPER, Clean Architecture, arquitetura modular, design systems.',
      'net-apis': 'Networking e APIs',
      'net-apis.desc': 'REST APIs, GraphQL, Alamofire.',
      'persistence': 'Persistência e armazenamento',
      'persistence.desc': 'Core Data, SwiftData, Keychain, UserDefaults.',
      'concurrency': 'Concorrência e reatividade',
      'concurrency.desc': 'Combine, Swift Concurrency, background tasks.',
      'testing': 'Testes e qualidade',
      'testing.desc': 'XCTest, testes unitários, Firebase Crashlytics.',
      'tools': 'Ferramentas e CI/CD',
      'tools.desc': 'Git, SPM, CocoaPods, Fastlane, CI/CD.',
      'ai-tools': 'Desenvolvimento com IA',
      'ai-tools.desc':
        'Cursor e Claude Code para debug, análise de crashes, planejamento de features e produtividade no dia a dia.',
      'bootcamp.title': 'Bootcamp de desenvolvimento web',
      'bootcamp.company': 'Le Wagon · 2019',
      'bootcamp-desc':
        'Bootcamp full time da Le Wagon em desenvolvimento full stack: Ruby, Ruby on Rails, SQL, JavaScript, REST APIs, Git e arquitetura web moderna.',
      'bootcamp-desc.2':
        'Projetos colaborativos em estilo produção, construídos e publicados em ambiente de equipe.',
      'projects': 'Projetos',
      'projects.github': 'Perfil no GitHub',
      'app.1.desc.0':
        'Projeto pessoal iOS de acompanhamento de lançamentos de anime — em preparação para a App Store.',
      'app.1.desc.1':
        'O AniTimer usa a API MyAnimeSchedule para filtros, favoritos e grade semanal personalizada de lançamentos, com visão de timetable dos próximos animes.',
      'app.1.desc.2':
        'Notificações locais configuráveis alinhadas às datas de exibição. Explorando MVVM-C, componentes reutilizáveis e integração SwiftUI em fluxos UIKit.',
      'app.1.desc.3':
        'Integrações com WidgetKit e recursos modernos do iOS, usando o projeto como laboratório de arquitetura modular e SwiftUI com UIKit.',
      'app.2.stack': 'SwiftUI, GraphQL, Apollo, Combine',
      'app.2.desc':
        'Explora GraphQL, Combine e Swift Concurrency com a API de Rick and Morty.',
      'app.2.desc.2':
        'Laboratório de padrões reativos, paralelismo e componentes SwiftUI reutilizáveis com MVVM.',
      'footer.copyright':
        '© 2026 João Gabriel Barreto · Site estático, GitHub Pages',
      'lang.toggle.aria': 'Alternar idioma entre português e inglês',
    },
  };

  function applyLang(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title =
      lang === 'en'
        ? 'João Gabriel Barreto — iOS Software Engineer'
        : 'João Gabriel Barreto — Engenheiro de Software iOS';
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

  const toggles = [
    document.getElementById('lang-toggle'),
    document.getElementById('lang-toggle-nav'),
  ].filter(Boolean);
  if (!toggles.length) return;

  function setLang(lang) {
    toggles.forEach((t) => {
      t.checked = lang === 'en';
    });
    applyLang(lang);
  }

  const saved = localStorage.getItem('siteLang') || 'en';
  setLang(saved);

  toggles.forEach((toggle) => {
    toggle.addEventListener('change', () => {
      setLang(toggle.checked ? 'en' : 'pt');
    });
  });
})();
