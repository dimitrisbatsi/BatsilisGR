import type { Locale, PostLocale } from './config';

export interface Service {
  id: string;
  title: string;
  /** Short uppercase label on the right of the card header. */
  label: string;
  body: string;
  tags: string[];
  /** Marks a service that is announced but not yet offered. */
  upcoming?: boolean;
}

export interface SectionCopy {
  id: string;
  /** Full heading in the right column. */
  heading: string;
  /** Short label in the left-column section index. */
  navLabel: string;
}

export interface UiStrings {
  meta: { title: string; description: string; ogImageAlt: string };
  roleBadge: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    links: string;
    languages: string;
    locationValue: string;
    /** Languages the author works in, which may differ from the page language. */
    languagesValue: string;
  };
  nav: { sections: string; language: string };
  status: string;
  timezone: string;
  /** On pages in a language the author does not work in, the label names the working language. */
  cta: { label: string; mailSubject: string };
  sections: {
    profile: SectionCopy;
    services: SectionCopy;
    ventures: SectionCopy;
    experience: SectionCopy;
    writing: SectionCopy;
  };
  profile: string[];
  services: Service[];
  visitWebsite: string;
  /** Link from the home page and articles to the article index. */
  allArticles: string;
  footer: { rights: string; location: string; builtWith: string };
}

/** Strings used only by article pages, the article index and feeds, which exist in POST_LOCALES. */
export interface BlogStrings {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  updated: string;
  backToPortfolio: string;
  rssTitle: string;
  rssDescription: string;
  articleCta: { heading: string; body: string };
}

export const UI: Record<Locale, UiStrings> = {
  el: {
    meta: {
      title: 'Dimitrios P. Batsilis | Ψηφιοποίηση Επιχειρήσεων & Analytics',
      description:
        'Ψηφιοποίηση επιχειρήσεων: εσωτερικά εργαλεία και αυτοματισμοί, dashboards με ETL, διασυνδέσεις ERP και CRM, και AI agents. Θεσσαλονίκη.',
      ogImageAlt: 'Dimitrios P. Batsilis — Digital Product & Solutions Architect',
    },
    roleBadge: 'Digital Product & Solutions Architect',
    contact: {
      email: 'Email',
      phone: 'Τηλέφωνο',
      location: 'Τοποθεσία',
      links: 'Links',
      languages: 'Γλώσσες',
      locationValue: 'Θεσσαλονίκη',
      languagesValue: 'Ελληνικά · Αγγλικά',
    },
    nav: { sections: 'Ενότητες', language: 'Γλώσσα' },
    status: 'Διαθέσιμος για νέες συνεργασίες',
    timezone: 'TZ: EET (UTC+2 / UTC+3)',
    cta: { label: 'Ας μιλήσουμε για το έργο σας', mailSubject: 'Αίτημα συνεργασίας μέσω batsilis.gr' },
    sections: {
      profile: { id: 'profile', heading: 'Προφίλ & Προσέγγιση', navLabel: 'Προφίλ' },
      services: { id: 'services', heading: 'Υπηρεσίες', navLabel: 'Υπηρεσίες' },
      ventures: { id: 'ventures', heading: 'Ψηφιακά Προϊόντα & Εγχειρήματα', navLabel: 'Προϊόντα' },
      experience: { id: 'experience', heading: 'Επαγγελματική Εμπειρία', navLabel: 'Εμπειρία' },
      writing: { id: 'writing', heading: 'Άρθρα & Σκέψεις', navLabel: 'Άρθρα' },
    },
    profile: [
      'Βοηθώ επιχειρήσεις να ψηφιοποιήσουν τον τρόπο που δουλεύουν: σχεδιάζω και υλοποιώ τα εσωτερικά εργαλεία, τους αυτοματισμούς, τις ροές δεδομένων και τις διασυνδέσεις που αντικαθιστούν τη χειροκίνητη δουλειά και τα σκόρπια Excel.',
      'Η εμπειρία μου καλύπτει solutions engineering σε εταιρικό επιχειρησιακό λογισμικό, αρχιτεκτονική πλατφορμών .NET, σύγχρονα decoupled frontends (Vue.js, Nuxt 3, Astro) και pipelines δεδομένων με Python και SQL που τροφοδοτούν το Power BI.',
      'Δουλεύω από άκρη σε άκρη: από τη χαρτογράφηση της διαδικασίας και την επιλογή της σωστής πλατφόρμας, είτε πρόκειται για custom λύση είτε για υπάρχον εργαλείο όπως το Jira, μέχρι την υλοποίηση, το rollout και την υιοθέτηση από την ομάδα.',
    ],
    services: [
      {
        id: 'digitalisation',
        title: 'Ψηφιοποίηση & Εσωτερικά Εργαλεία',
        label: 'Αυτοματισμοί',
        body: 'Σχεδιασμός και υλοποίηση εσωτερικών αυτοματισμών και εργαλείων, ή εγκατάσταση και προσαρμογή υπαρχουσών πλατφορμών, όπως η μετάβαση από ένα παλιό σύστημα tickets στο Jira ή η αντικατάσταση σκόρπιων manuals από μια σύγχρονη πλατφόρμα τεκμηρίωσης.',
        tags: ['Process Automation', 'Jira', 'Internal Platforms', '.NET'],
      },
      {
        id: 'analytics',
        title: 'Analytics, Dashboards & ETL',
        label: 'Δεδομένα',
        body: 'Συγκέντρωση δεδομένων από ERP, βάσεις και Excel μέσα από αξιόπιστα ETL pipelines, και μετατροπή τους σε dashboards που η επιχείρηση πραγματικά εμπιστεύεται.',
        tags: ['SQL Server', 'PostgreSQL', 'Python ETL', 'Power BI'],
      },
      {
        id: 'integrations',
        title: 'Διασυνδέσεις Εφαρμογών',
        label: 'Integrations',
        body: 'Σύνδεση ERP, CRM, e-shop και εσωτερικών συστημάτων, ώστε τα δεδομένα να περνούν αυτόματα από το ένα στο άλλο αντί να ξαναπληκτρολογούνται.',
        tags: ['REST & GraphQL APIs', 'ERP Integrations', 'Webhooks', 'Scheduled Sync'],
      },
      {
        id: 'ai',
        title: 'AI Assistants & Agents',
        label: 'Σύντομα',
        body: 'Assistants και agents που βασίζονται στα δικά σας έγγραφα και δεδομένα, για να υποστηρίζουν ομάδες όπως οι σύμβουλοι υποστήριξης με γρήγορες απαντήσεις που παραπέμπουν στις πηγές τους.',
        tags: ['LLMs', 'RAG', 'Agents'],
        upcoming: true,
      },
    ],
    visitWebsite: 'Επίσκεψη',
    allArticles: 'Όλα τα άρθρα',
    footer: {
      rights: 'Με επιφύλαξη παντός δικαιώματος.',
      location: 'Θεσσαλονίκη',
      builtWith: 'Κατασκευή με Astro & Tailwind v4',
    },
  },
  en: {
    meta: {
      title: 'Dimitrios P. Batsilis | Digitalisation, Data & Integrations',
      description:
        'Solutions architect helping companies digitalise operations: internal tools and automation, analytics dashboards with ETL, ERP and CRM integrations, and AI agents.',
      ogImageAlt: 'Dimitrios P. Batsilis — Digital Product & Solutions Architect',
    },
    roleBadge: 'Digital Product & Solutions Architect',
    contact: {
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      links: 'Links',
      languages: 'Languages',
      locationValue: 'Thessaloniki, Greece',
      languagesValue: 'English · Greek',
    },
    nav: { sections: 'Sections', language: 'Language' },
    status: 'Available for new engagements',
    timezone: 'TZ: EET (UTC+2 / UTC+3)',
    cta: { label: 'Discuss a Project', mailSubject: 'Project inquiry via batsilis.gr' },
    sections: {
      profile: { id: 'profile', heading: 'Profile & Approach', navLabel: 'Profile' },
      services: { id: 'services', heading: 'Services', navLabel: 'Services' },
      ventures: { id: 'ventures', heading: 'Digital Products & Independent Ventures', navLabel: 'Products' },
      experience: { id: 'experience', heading: 'Professional Experience', navLabel: 'Experience' },
      writing: { id: 'writing', heading: 'Architecture Insights & Writing', navLabel: 'Writing' },
    },
    profile: [
      'I help companies digitalise how they work: designing and building the internal tools, automations, data pipelines, and integrations that replace manual effort and scattered spreadsheets.',
      'My background spans solutions engineering in enterprise business software, .NET platform architecture, decoupled frontends (Vue.js, Nuxt 3, Astro), and Python and SQL data pipelines feeding Power BI.',
      'I work end to end: from mapping the process and choosing the right platform, whether a custom build or an existing tool such as Jira, through implementation, rollout, and adoption by the team.',
    ],
    services: [
      {
        id: 'digitalisation',
        title: 'Digitalisation & Internal Tools',
        label: 'Automation',
        body: 'Design and build internal automations and tools, or roll out and adapt existing platforms, such as moving issue tracking from a legacy system to Jira or replacing scattered manuals with a modern documentation hub.',
        tags: ['Process Automation', 'Jira', 'Internal Platforms', '.NET'],
      },
      {
        id: 'analytics',
        title: 'Analytics, Dashboards & ETL',
        label: 'Data',
        body: 'Bring data from ERPs, databases, and spreadsheets together through reliable ETL pipelines, and turn it into dashboards the business actually trusts.',
        tags: ['SQL Server', 'PostgreSQL', 'Python ETL', 'Power BI'],
      },
      {
        id: 'integrations',
        title: 'Application Integrations',
        label: 'Integrations',
        body: 'Connect ERP, CRM, e-shop, and internal systems so data moves between them automatically instead of being re-keyed by hand.',
        tags: ['REST & GraphQL APIs', 'ERP Integrations', 'Webhooks', 'Scheduled Sync'],
      },
      {
        id: 'ai',
        title: 'AI Assistants & Agents',
        label: 'Coming soon',
        body: "Assistants and agents grounded in your company's own documents and data, supporting teams such as service consultants with fast answers that cite their sources.",
        tags: ['LLMs', 'RAG', 'Agents'],
        upcoming: true,
      },
    ],
    visitWebsite: 'Visit Website',
    allArticles: 'All articles',
    footer: {
      rights: 'All rights reserved.',
      location: 'Thessaloniki, Greece',
      builtWith: 'Built with Astro & Tailwind v4',
    },
  },
  de: {
    meta: {
      title: 'Dimitrios P. Batsilis | Digitalisierung, Daten & Integration',
      description:
        'Solutions Architect für die Digitalisierung von Unternehmen: interne Tools und Automatisierung, Dashboards mit ETL, ERP- und CRM-Anbindungen und KI-Agenten. Zusammenarbeit auf Englisch.',
      ogImageAlt: 'Dimitrios P. Batsilis — Digital Product & Solutions Architect',
    },
    roleBadge: 'Digital Product & Solutions Architect',
    contact: {
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      links: 'Links',
      languages: 'Sprachen',
      locationValue: 'Thessaloniki, Griechenland',
      languagesValue: 'Englisch · Griechisch',
    },
    nav: { sections: 'Bereiche', language: 'Sprache' },
    status: 'Verfügbar für neue Projekte',
    timezone: 'TZ: EET (UTC+2 / UTC+3) · 1 h vor MEZ',
    // English subject nudges the sender to write in English; the (DE) suffix attributes the inquiry to this page
    cta: { label: 'Projekt besprechen (auf Englisch)', mailSubject: 'Project inquiry via batsilis.gr (DE)' },
    sections: {
      profile: { id: 'profile', heading: 'Profil & Arbeitsweise', navLabel: 'Profil' },
      services: { id: 'services', heading: 'Leistungen', navLabel: 'Leistungen' },
      ventures: { id: 'ventures', heading: 'Digitale Produkte & eigene Projekte', navLabel: 'Produkte' },
      experience: { id: 'experience', heading: 'Berufserfahrung', navLabel: 'Erfahrung' },
      writing: { id: 'writing', heading: 'Fachartikel (auf Englisch)', navLabel: 'Artikel' },
    },
    profile: [
      'Ich helfe Unternehmen, ihre Arbeitsabläufe zu digitalisieren: Ich konzipiere und baue die internen Tools, Automatisierungen, Datenflüsse und Schnittstellen, die manuelle Arbeit und verstreute Excel-Tabellen ersetzen.',
      'Mein Hintergrund umfasst Solutions Engineering für Unternehmenssoftware, Plattformarchitektur mit .NET, entkoppelte Frontends (Vue.js, Nuxt 3, Astro) sowie Datenpipelines mit Python und SQL, die Power BI speisen.',
      'Ich begleite Projekte von Anfang bis Ende: von der Analyse des Prozesses und der Wahl der passenden Plattform, ob individuelle Lösung oder bestehendes Werkzeug wie Jira, über die Umsetzung bis zur Einführung und Nutzung im Team.',
      'Für Unternehmen in Deutschland, Österreich und der Schweiz arbeite ich remote aus Thessaloniki. Gespräche und Projektunterlagen laufen auf Englisch.',
    ],
    services: [
      {
        id: 'digitalisation',
        title: 'Digitalisierung & interne Tools',
        label: 'Automatisierung',
        body: 'Konzeption und Umsetzung interner Automatisierungen und Tools, oder Einführung und Anpassung bestehender Plattformen, etwa der Umstieg von einem veralteten Ticketsystem auf Jira oder der Ersatz verstreuter Handbücher durch eine moderne Dokumentationsplattform.',
        tags: ['Process Automation', 'Jira', 'Internal Platforms', '.NET'],
      },
      {
        id: 'analytics',
        title: 'Analytics, Dashboards & ETL',
        label: 'Daten',
        body: 'Daten aus ERP-Systemen, Datenbanken und Excel über zuverlässige ETL-Pipelines zusammenführen und in Dashboards verwandeln, denen das Unternehmen wirklich vertraut.',
        tags: ['SQL Server', 'PostgreSQL', 'Python ETL', 'Power BI'],
      },
      {
        id: 'integrations',
        title: 'Schnittstellen & Integration',
        label: 'Integration',
        body: 'ERP, CRM, Onlineshop und interne Systeme verbinden, damit Daten automatisch von einem System ins andere fließen, statt von Hand neu eingetippt zu werden.',
        tags: ['REST & GraphQL APIs', 'ERP Integrations', 'Webhooks', 'Scheduled Sync'],
      },
      {
        id: 'ai',
        title: 'KI-Assistenten & Agenten',
        label: 'Demnächst',
        body: 'Assistenten und Agenten auf Basis Ihrer eigenen Dokumente und Daten, die Teams wie den Kundensupport mit schnellen Antworten samt Quellenangabe unterstützen.',
        tags: ['LLMs', 'RAG', 'Agents'],
        upcoming: true,
      },
    ],
    visitWebsite: 'Website besuchen',
    allArticles: 'Alle Artikel (Englisch)',
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      location: 'Thessaloniki, Griechenland',
      builtWith: 'Erstellt mit Astro & Tailwind v4',
    },
  },
};

export const BLOG_UI: Record<PostLocale, BlogStrings> = {
  el: {
    metaTitle: 'Άρθρα | Dimitrios P. Batsilis',
    metaDescription:
      'Άρθρα για ψηφιοποίηση επιχειρήσεων, διασυνδέσεις ERP και e-shop, analytics και AI στην πράξη, από την εμπειρία υλοποίησης.',
    heading: 'Άρθρα & Σκέψεις',
    intro: 'Πρακτικά άρθρα για ψηφιοποίηση, δεδομένα, διασυνδέσεις και AI, γραμμένα από την πράξη και όχι από τη θεωρία.',
    updated: 'Ενημέρωση',
    backToPortfolio: 'Πίσω στην αρχική',
    rssTitle: 'Dimitrios P. Batsilis — Άρθρα',
    rssDescription: 'Ψηφιοποίηση, δεδομένα, διασυνδέσεις και AI για επιχειρήσεις.',
    articleCta: {
      heading: 'Έχετε παρόμοια πρόκληση στην επιχείρησή σας;',
      body: 'Σχεδιάζω και υλοποιώ εσωτερικά εργαλεία, διασυνδέσεις, analytics και AI λύσεις για επιχειρήσεις. Πείτε μου τι σας απασχολεί και θα σας προτείνω το πιο απλό βήμα που αποδίδει.',
    },
  },
  en: {
    metaTitle: 'Writing | Dimitrios P. Batsilis',
    metaDescription:
      'Articles on business digitalisation, ERP and e-shop integrations, analytics and practical AI, drawn from hands-on delivery.',
    heading: 'Architecture Insights & Writing',
    intro: 'Practical articles on digitalisation, data, integrations and AI, written from delivery rather than theory.',
    updated: 'Updated',
    backToPortfolio: 'Back to portfolio',
    rssTitle: 'Dimitrios P. Batsilis — Writing',
    rssDescription: 'Digitalisation, data, integrations and AI for businesses.',
    articleCta: {
      heading: 'Facing a similar challenge in your business?',
      body: 'I design and build internal tools, integrations, analytics and AI solutions for companies. Tell me what is holding you back and I will suggest the simplest step that pays off.',
    },
  },
};
