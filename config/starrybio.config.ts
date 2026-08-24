import type { StarryBioConfig } from '../src/config/schema';

const config = {
  pageTitle: 'a9x',
  favicon: 'assets/images/favicon.png',

  // Preserve the v2 blue-dark appearance with v3's restored classic-blue preset.
  theme: {
    preset: 'classic-blue',
    buttonStyle: 'glass',
    background: 'starfield',
    animationIntensity: 'normal',
  },

  layout: {
    mode: 'centered',
    linkStyle: 'cards',
    profilePosition: 'top',
    featuredPosition: 'above-links',
  },

  animation: {
    starMultiplier: 1,
    shootingStarMultiplier: 1,
  },

  profile: {
    name: 'a9x',
    description: 'me and claude against the world',
    image: 'assets/images/profile.png',
    layout: 'vertical',
  },

  // v3 groups the former top-level links into sections and renames text to label.
  sections: [
    {
      title: 'Links',
      links: [
        {
          label: 'Discord',
          subtitle: 'a9x.',
          specialType: 'copy',
          copyValue: 'a9x.',
          icon: { simpleIcon: 'Discord' },
        },
        {
          label: 'Spotify',
          subtitle: 'a9x',
          url: 'https://open.spotify.com/user/31mighuomasev2jc53i7od7rix5m',
          icon: { simpleIcon: 'Spotify' },
        },
        {
          label: 'YouTube',
          subtitle: 'nota9x',
          url: 'https://www.youtube.com/channel/UCyTZZvIwXdwMMxcQJNMkrQA',
          icon: { simpleIcon: 'YouTube' },
        },
        {
          label: 'Steam',
          subtitle: 'nota9x',
          url: 'https://steamcommunity.com/id/nota9x/',
          icon: { simpleIcon: 'Steam' },
        },
        {
          label: 'Instagram',
          subtitle: 'urb.exnj',
          url: 'https://www.instagram.com/urb.exnj/',
          icon: { simpleIcon: 'Instagram' },
        },
        {
          label: 'GitHub',
          subtitle: 'nota9x',
          url: 'https://github.com/nota9x',
          icon: { simpleIcon: 'GitHub' },
        },
        {
          label: 'Roblox',
          subtitle: 'enic183',
          url: 'https://roblox.com/users/460373745/profile',
          icon: { simpleIcon: 'Roblox' },
        },
        {
          label: 'Reddit',
          subtitle: 'The1NameICanThinkOf',
          url: 'https://www.reddit.com/user/The1NameICanThinkOf/',
          icon: { simpleIcon: 'Reddit' },
        },
        {
          label: 'Twitch',
          subtitle: 'a9xlol',
          url: 'https://www.twitch.tv/a9xlol',
          icon: { simpleIcon: 'Twitch' },
        },
        {
          label: 'Email',
          subtitle: 'hey@a9x.pro',
          url: 'mailto:hey@a9x.pro',
          icon: 'm15.24 8.998 3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284h-.003zm-5.456 3.538 1.809-1.616a2.438 2.438 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024zM23.871 2.463a.551.551 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.551.551 0 0 0-.129-.36z',
        },
      ],
    },
  ],

  status: {
    enabled: true,
    ownerTimeZone: 'America/New_York',
    showOwnerTime: false,
    showVisitorTime: false,
    showNextAvailable: false,
    default: {
      text: 'Available',
      color: '#23A559',
      icon: 'assets/images/online.webp',
      message: 'Online and available to chat!',
    },
    types: {
      available: {
        text: 'Available',
        color: '#23A559',
        icon: 'assets/images/online.webp',
        message: 'Online and available to chat!',
      },
      busy: {
        text: 'School',
        color: '#F23F43',
        icon: 'assets/images/dnd.webp',
        message: 'Available after 3:00 PM',
      },
      sleeping: {
        text: 'Sleeping',
        color: '#80848E',
        icon: 'assets/images/offline.webp',
        message: 'Will reply in the morning',
      },
    },
    // v3 evaluates these windows in each visitor's local timezone.
    schedule: [
      { status: 'sleeping', days: 'weekdays', start: '03:00', end: '10:45' },
      { status: 'available', days: 'weekdays', start: '20:00', end: '03:00' },
      { status: 'available', days: 'weekends', start: '14:00', end: '04:00' },
      { status: 'busy', days: 'weekdays', start: '11:30', end: '19:30' },
      { status: 'sleeping', days: 'weekends', start: '04:00', end: '13:00' },
    ],
  },

  announcement: {
    enabled: false,
    text: 'Stand with us to protect kids & creators on Roblox. Click here to add your name.',
    url: 'https://act.rokhanna.com/a/save-roblox-petition',
  },

  seo: {
    title: 'a9x',
    description: 'me and claude against the world',
    image: '/assets/images/profile.png',
    canonicalUrl: 'https://a9x.pro',
    themeColor: '#7ddf9b',
  },

  ogImage: {
    enabled: false,
    output: 'public/og.png',
    title: 'StarryBio v3.0',
    subtitle: 'A premium animated link-in-bio template.',
  },

  qr: {
    enabled: true,
    showButton: false,
    url: 'https://a9x.pro',
    output: 'public/qr.png',
  },

  analytics: {
    provider: 'none',
  },

  footer: {
    copyright: '© 2026 a9x Development',
  },
} satisfies StarryBioConfig;

export default config;
