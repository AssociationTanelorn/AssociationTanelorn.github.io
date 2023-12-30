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
          text: 'Grands Stratèges',
          href: getPermalink('/events/grands-strateges'),
        },
        {
          text: 'Warmistice (à venir)',
          //href: getPermalink('/services'),
        },
        {
          text: 'Meeple League (à venir)',
          //href: getPermalink('/pricing'),
        },
        {
          text: 'Convention Tanelorn (à venir)',
          //href: getPermalink('/contact'),
        },
        {
          text: 'Le conclave (à venir)',
          //href: getPermalink('/terms'),
        },
        {
          text: 'Tournois internes (à venir)',
          //href: getPermalink('/about'),
        }
      ],
    },/*
    {
      text: 'L\'association',
      links: [
        {
          text: 'Fonctionnement',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Nos domaines',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Nous rejoindre',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'A propos de nous',
          href: getPermalink('/landing/product'),
        },
        {
          text: '...',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: '...',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },*/
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
    <a class="text-blue-600 hover:underline dark:text-gray-200 font-semibold" href="https://associationtanelorn.github.io"> Association Tanelorn</a> · Tous droits réservés (sans doute ?)
    <br /><a class="text-blue-600 hover:underline dark:text-gray-200" href="${getPermalink('/terms')}">Conditions</a> - <a class="text-blue-600 hover:underline dark:text-gray-200" href="${getPermalink('/privacy')}">Politique de confidentialité</a>
  `,
};
