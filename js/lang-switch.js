(function () {
  const translations = {
    en: {
      'hero.subtitle': 'iOS Software Engineer',
      'nav.index': 'Index',
      'nav.contact': 'Contact',
      'sections.aria': 'Sections',
      'skip': 'Skip to content',
      'hero.scroll': 'Swipe',
      'place.full': 'Recife, Pernambuco — Brazil',
      'location.short': 'Location',
      'about.a': 'iOS',
      'about.b': 'Software',
      'about.c': 'Engineer',
      'about.now.label': 'Now',
      'about.now.value': 'dti digital · Banco Inter',
      'col.0.kicker': 'Now',
      'col.0.when': 'Sep 2026 — Present',
      'col.0.body':
        'iOS on Banco Inter’s Super App with the international account team. SDUI and design systems, with Swift Package Manager, Tuist, and Swift Concurrency. Aligning iOS and Android features across Brazil and US account context, and closing and documenting them.',
      'col.1.kicker': 'Health',
      'col.1.when': 'Jul 2024 — Sep 2026',
      'col.1.body':
        'White-label hospital apps used across Brazil. Owned legacy Core Data persistence and sync behind the top Crashlytics stability signal, and built a modular attendance and exam history in SwiftUI inside a UIKit app, with offline updates on a high-traffic screen. In-app PDF and image preview, silent push, tier-aware features, and Fastlane releases through the App Store.',
      'col.1.stat': 'Reliability',
      'col.1.stat2.label': 'Network',
      'col.2.kicker': 'Web',
      'col.2.when': 'Nov 2020 — Mar 2023',
      'col.2.body':
        'Large-scale React and Angular applications for Claro and DTVGO: feature work, maintenance, and user experience. Moved across consulting projects and business domains, picking up unfamiliar systems quickly. Supported high-traffic platforms during live events, including streaming around the World Cup.',
      'contact.heading': "Let's talk",
      'contact.note': 'iOS roles, collaborations, and a straight conversation.',
      'link.profile': 'Profile',
      'link.repo': 'Repository',
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
        'iOS Software Engineer with 5 years of experience owning high-impact features throughout the development lifecycle. At dti digital, iOS on Banco Inter’s Super App with the international account team — SDUI, design systems, SPM and Tuist with Swift Concurrency — aligning iOS and Android across Brazil and US account context. Previously, at MV, shipped healthcare white-label apps used across hospitals throughout Brazil.',
      'exp': 'Experience',
      'title.0': 'iOS Software Engineer',
      'company.0': 'dti digital — Sep 2026 – Present',
      'timeline.body.desc.0':
        'iOS engineer on Banco Inter’s Super App with the international account team. SDUI and design systems in a native UIKit and SwiftUI codebase.',
      'timeline.body.desc.0b':
        'Swift Package Manager and Tuist, using Swift Concurrency. Aligning iOS and Android features across Brazil and US account context, and closing and documenting features.',
      'title.1': 'iOS Software Engineer',
      'company.1': 'MV — Jul 2024 – Sep 2026',
      'timeline.body.desc.1':
        'White-label hospital apps used across Brazil. Owned legacy Core Data persistence and sync behind the top Crashlytics stability signal, and built a modular attendance and exam history in SwiftUI inside a UIKit app, with offline updates, filtering, and fewer network calls on a high-traffic screen.',
      'timeline.body.desc.1b':
        'In-app PDF and image preview, Firebase silent push for account updates, and tier-aware features aligned with business rules. Invoice and income-tax screens as isolated Swift packages with shared UI. Ruby scripts for Xcode targets, and a Fastlane pipeline through certificates, provisioning, and App Store submission.',
      'title.2': 'Frontend Software Engineer',
      'company.2': 'Accenture — Nov 2020 – Mar 2023',
      'timeline.body.desc.2':
        'Large-scale React and Angular applications for Claro and DTVGO: feature work, maintenance, and user experience. Moved across consulting projects and business domains, picking up unfamiliar systems quickly and delivering under tight deadlines.',
      'timeline.body.desc.2b':
        'Supported high-traffic platforms during live events, including streaming around the World Cup, with cross-functional agile teams on frontend that had to stay maintainable as the product grew.',
      'skills.section.title': 'Skills',
      'education.section.title': 'Education',
      'lang-frame': 'Languages & Frameworks',
      'lang-stack.desc': 'Swift, Objective-C, SwiftUI, UIKit.',
      'web-stack': 'Web',
      'web-stack.desc': 'React and Angular, from large-scale client work at Accenture.',
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
      'projects.professional': 'Professional',
      'projects.personal': 'Personal',
      'projects.github': 'GitHub profile',
      'pro.1.title': 'Healthcare Whitelabel Apps',
      'pro.1.company': 'MV · Jul 2024 – Sep 2026',
      'pro.1.hover':
        'Patient apps across hospital brands — Core Data sync, SwiftUI modules, and App Store releases.',
      'pro.1.desc.0':
        'White-label hospital patient apps used by thousands of users across multiple branded releases — modular architecture, offline-aware flows, and App Store delivery.',
      'pro.1.desc.1':
        'Owned legacy Core Data persistence and sync behind the top Crashlytics stability signal. Built a modular attendance and exam history in SwiftUI inside a UIKit app, with offline updates and fewer network calls on a high-traffic screen.',
      'pro.1.desc.2':
        'Delivered in-app document preview, silent push background refresh, tier-aware feature gating, and invoice/income tax screens as isolated SPM modules with shared design system patterns.',
      'pro.2.title': 'Claro & DTVGO',
      'pro.2.company': 'Accenture · Nov 2020 – Mar 2023',
      'pro.2.hover':
        'React and Angular for Claro and DTVGO, including live-event traffic.',
      'pro.2.desc.0':
        'Large-scale web applications for Claro and DTVGO. Feature development, maintenance, and UI improvements in React and Angular, across fast-paced consulting teams.',
      'pro.2.desc.1':
        'High-traffic digital experiences during major events, including streaming platforms in the World Cup period. Fast onboarding and consistent delivery across client environments.',
      'app.1.hover':
        'Weekly anime schedules, favorites, notifications, and home-screen widgets.',
      'app.1.desc.0':
        'Personal iOS project focused on anime release tracking — currently preparing for App Store submission.',
      'app.1.desc.1':
        'AniTimer uses the MyAnimeSchedule API to deliver filtering, favorites management, and personalized weekly release schedules so users can browse upcoming anime in a timetable view.',
      'app.1.desc.2':
        'Implemented local and configurable notification flows aligned with upcoming air dates. Exploring MVVM-C, reusable UI components, and SwiftUI integration within UIKit-based flows.',
      'app.1.desc.3':
        'WidgetKit integrations and modern iOS capabilities, using the project as a platform for modular architecture and SwiftUI alongside UIKit.',
      'app.2.stack': 'SwiftUI, GraphQL, Apollo, Combine',
      'app.2.hover':
        'Apollo iOS client: typed GraphQL queries, pagination, and search.',
      'app.2.desc':
        'SwiftUI app that consumes a GraphQL API with Apollo iOS. The schema comes from introspection, queries live in GraphQL documents, and generated types ship in an SPM module.',
      'app.2.desc.2':
        'Character and location lists with filtered search, debounced Combine, and paged results.',
      'footer.copyright':
        '© 2026 João Gabriel Barreto · Static site, GitHub Pages',
      'lang.toggle.aria': 'Toggle language between Portuguese and English',
    },
    pt: {
      'hero.subtitle': 'Engenheiro de Software iOS',
      'nav.index': 'Início',
      'nav.contact': 'Contato',
      'sections.aria': 'Seções',
      'skip': 'Pular para o conteúdo',
      'hero.scroll': 'Deslize',
      'place.full': 'Recife, Pernambuco — Brasil',
      'location.short': 'Local',
      'about.a': 'Engenheiro',
      'about.b': 'de Software',
      'about.c': 'iOS',
      'about.now.label': 'Agora',
      'about.now.value': 'dti digital · Banco Inter',
      'col.0.kicker': 'Agora',
      'col.0.when': 'Set 2026 — Presente',
      'col.0.body':
        'iOS no Super App do Banco Inter, com o time de conta internacional. SDUI e design systems, com Swift Package Manager, Tuist e Swift Concurrency. Alinhamento de features iOS e Android entre os contextos de conta Brasil e EUA, fechando e documentando as entregas.',
      'col.1.kicker': 'Saúde',
      'col.1.when': 'Jul 2024 — Set 2026',
      'col.1.body':
        'Apps whitelabel de hospitais por todo o Brasil. Assumi a persistência e a sincronização legadas em Core Data por trás do principal sinal de instabilidade no Crashlytics, e construí um histórico modular de atendimentos e exames em SwiftUI dentro de um app UIKit, com atualização offline numa tela de alto tráfego. Pré-visualização de PDFs e imagens, silent push, features por nível de conta e releases no Fastlane até a App Store.',
      'col.1.stat': 'Confiabilidade',
      'col.1.stat2.label': 'Rede',
      'col.2.kicker': 'Web',
      'col.2.when': 'Nov 2020 — Mar 2023',
      'col.2.body':
        'Aplicações de grande escala em React e Angular para Claro e DTVGO: funcionalidades, manutenção e experiência do usuário. Atuei em vários projetos de consultoria e domínios, entrando rápido em sistemas desconhecidos. Apoiei plataformas de alto tráfego em eventos ao vivo, incluindo streaming na Copa do Mundo.',
      'contact.heading': 'Vamos conversar',
      'contact.note': 'Vagas iOS, colaborações e uma conversa direta.',
      'link.profile': 'Perfil',
      'link.repo': 'Repositório',
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
        'Engenheiro de Software iOS com 5 anos de experiência liderando features de alto impacto em todo o ciclo de desenvolvimento. Na dti digital, atuo no Super App do Banco Inter com o time de conta internacional — SDUI, design systems, SPM e Tuist com Swift Concurrency — alinhando features iOS e Android entre os contextos de conta Brasil e EUA. Antes, na MV, entreguei apps whitelabel de saúde usados em hospitais por todo o Brasil.',
      'exp': 'Experiência',
      'title.0': 'Engenheiro de Software iOS',
      'company.0': 'dti digital — Set 2026 – Presente',
      'timeline.body.desc.0':
        'Engenheiro iOS no Super App do Banco Inter, com o time de conta internacional. SDUI e design systems em um app nativo com UIKit e SwiftUI.',
      'timeline.body.desc.0b':
        'Swift Package Manager e Tuist, com Swift Concurrency. Alinhamento de features iOS e Android entre os contextos de conta Brasil e EUA, fechando e documentando as entregas.',
      'title.1': 'Engenheiro de Software iOS',
      'company.1': 'MV — Jul 2024 – Set 2026',
      'timeline.body.desc.1':
        'Apps whitelabel de hospitais por todo o Brasil. Assumi a persistência e a sincronização legadas em Core Data por trás do principal sinal de instabilidade no Crashlytics, e construí um histórico modular de atendimentos e exames em SwiftUI dentro de um app UIKit, com atualização offline, filtro e menos chamadas de rede numa tela de alto tráfego.',
      'timeline.body.desc.1b':
        'Pré-visualização de PDFs e imagens, silent push com Firebase para gestão de conta e features por nível de conta. Telas de faturas e imposto de renda como Swift Packages com UI compartilhada. Scripts em Ruby para targets no Xcode e pipeline no Fastlane até certificados, provisioning e submissão à App Store.',
      'title.2': 'Engenheiro de Software Frontend',
      'company.2': 'Accenture — Nov 2020 – Mar 2023',
      'timeline.body.desc.2':
        'Aplicações de grande escala em React e Angular para Claro e DTVGO: funcionalidades, manutenção e experiência do usuário. Atuei em vários projetos de consultoria e domínios, entrando rápido em sistemas desconhecidos e entregando com prazo apertado.',
      'timeline.body.desc.2b':
        'Apoiei plataformas de alto tráfego em eventos ao vivo, incluindo streaming na Copa do Mundo, com times ágeis em front-end que precisava continuar sustentável conforme o produto crescia.',
      'skills.section.title': 'Skills',
      'education.section.title': 'Formação',
      'lang-frame': 'Linguagens e frameworks',
      'lang-stack.desc': 'Swift, Objective-C, SwiftUI, UIKit.',
      'web-stack': 'Web',
      'web-stack.desc': 'React e Angular, em aplicações de grande escala na Accenture.',
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
      'projects.professional': 'Profissionais',
      'projects.personal': 'Pessoais',
      'projects.github': 'Perfil no GitHub',
      'pro.1.title': 'Apps Whitelabel de Saúde',
      'pro.1.company': 'MV · Jul 2024 – Set 2026',
      'pro.1.hover':
        'Apps de pacientes em várias marcas hospitalares — sync com Core Data, módulos SwiftUI e releases na App Store.',
      'pro.1.desc.0':
        'Apps whitelabel para pacientes hospitalares usados por milhares de usuários em múltiplos releases — arquitetura modular, fluxos offline-first e entrega na App Store.',
      'pro.1.desc.1':
        'Assumi a persistência e a sincronização legadas em Core Data por trás do principal sinal de instabilidade no Crashlytics. Construí um histórico modular de atendimentos e exames em SwiftUI dentro de um app UIKit, com atualização offline e menos chamadas de rede numa tela de alto tráfego.',
      'pro.1.desc.2':
        'Entreguei preview in-app de documentos, refresh silencioso via push, regras de features por tier e telas de fatura e imposto de renda como SPMs isolados com design system compartilhado.',
      'pro.2.title': 'Claro & DTVGO',
      'pro.2.company': 'Accenture · Nov 2020 – Mar 2023',
      'pro.2.hover':
        'React e Angular na Claro e na DTVGO, incluindo tráfego de eventos ao vivo.',
      'pro.2.desc.0':
        'Aplicações web de grande escala para Claro e DTVGO. Features, manutenção e melhorias de UI em React e Angular, em times de consultoria acelerada.',
      'pro.2.desc.1':
        'Experiências digitais de alto tráfego em grandes eventos, incluindo streaming na Copa do Mundo. Onboarding rápido e entrega consistente em ambientes de clientes diferentes.',
      'app.1.hover':
        'Grade semanal de animes, favoritos, notificações e widgets na tela inicial.',
      'app.1.desc.0':
        'Projeto pessoal iOS de acompanhamento de lançamentos de anime — em preparação para a App Store.',
      'app.1.desc.1':
        'O AniTimer usa a API MyAnimeSchedule para filtros, favoritos e grade semanal personalizada de lançamentos, com visão de timetable dos próximos animes.',
      'app.1.desc.2':
        'Notificações locais configuráveis alinhadas às datas de exibição. Explorando MVVM-C, componentes reutilizáveis e integração SwiftUI em fluxos UIKit.',
      'app.1.desc.3':
        'Integrações com WidgetKit e recursos modernos do iOS, usando o projeto como laboratório de arquitetura modular e SwiftUI com UIKit.',
      'app.2.stack': 'SwiftUI, GraphQL, Apollo, Combine',
      'app.2.hover':
        'Cliente Apollo iOS: queries GraphQL tipadas, paginação e busca.',
      'app.2.desc':
        'App SwiftUI que consome uma API GraphQL com Apollo iOS. O schema vem de introspection, as queries ficam em documentos GraphQL e os tipos gerados entram num módulo SPM.',
      'app.2.desc.2':
        'Listas de personagens e locais com busca filtrada, Combine com debounce e resultados paginados.',
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

  window.siteI18n = {
    t(key) {
      const lang = localStorage.getItem('siteLang') || 'en';
      return (translations[lang] && translations[lang][key]) || '';
    },
  };

  function setPressed(lang) {
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      const on = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    setPressed(lang);
    applyLang(lang);
    document.dispatchEvent(new CustomEvent('site-lang'));
  }

  setLang(localStorage.getItem('siteLang') || 'en');

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });
})();
