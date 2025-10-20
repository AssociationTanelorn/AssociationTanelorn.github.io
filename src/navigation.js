import { getPermalink, getDiscordPermalink, getFacebookPermalink, getForumPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    /*{
      text: 'Actualités',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },*/
    {
      text: 'Les évènements',
      links: [
        {
          text: 'Grands Stratèges (05/2025)',
          href: getPermalink('/events/grands-strateges/edition-2025'),
        },
        {
          text: 'Weekend MJB (12/2025)',
          href: getPermalink('/events/weekend-mjb'),
        },
        {
          text: 'Warmistice (01/2026)',
          href: getPermalink('/events/warmistice'),
        },
        {
          text: 'Tournois internes',
          href: getPermalink('/events/tournois-internes'),
        }
      ],
    },
    {
      text: 'L\'association',
      href: getPermalink('/association'),
    },
    {
      text: 'Nous contacter',
      href: getPermalink('/contact'),
    },
  ]
};

export const footerData = {
  /*links: [
    {
      title: 'Actualités',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Les évènements',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'L\'association',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termes', href: getPermalink('/terms') },
    { text: 'Politique de confidentialité', href: getPermalink('/privacy') },
  ], */
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: getDiscordPermalink() },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: getFacebookPermalink() },
    { ariaLabel: 'Forum', icon: 'tabler:messages', href: getForumPermalink() },
  ],
  footNote: `
    <a class="custom-link font-semibold" href="https://associationtanelorn.github.io"> Association Tanelorn</a> · Tous droits réservés (sans doute ?)
    <br /><a class="custom-link" href="${getPermalink('/terms')}">Conditions</a> - <a class="custom-link" href="${getPermalink('/privacy')}">Politique de confidentialité</a>
  `,
};
