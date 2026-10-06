import type { Locale } from './config';

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
  contact: { email: string; phone: string; location: string; links: string; locationValue: string };
  nav: { sections: string; language: string };
  status: string;
  timezone: string;
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
  backToPortfolio: string;
  footer: { rights: string; location: string; builtWith: string };
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
      locationValue: 'Θεσσαλονίκη',
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
    backToPortfolio: 'Πίσω στην αρχική',
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
      locationValue: 'Thessaloniki, Greece',
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
    backToPortfolio: 'Back to portfolio',
    footer: {
      rights: 'All rights reserved.',
      location: 'Thessaloniki, Greece',
      builtWith: 'Built with Astro & Tailwind v4',
    },
  },
};
